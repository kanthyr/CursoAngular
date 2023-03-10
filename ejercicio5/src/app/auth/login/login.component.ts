import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  hide: boolean = true;

  constructor( private _fb: FormBuilder, 
    private _authService: AuthService,
    private _router: Router) {
    this.form = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.form.invalid) { 
      this.form.markAllAsTouched();
      return;
    }
    this._authService.login(this.form.value).subscribe(
       data => {
        console.log(data);
        Swal.fire({  icon: 'success',  title: "Bienvenido"});
        this._router.navigateByUrl('admin/users');
              },
       error => {
        console.log("Ocurrio un error: ", error);
        Swal.fire({  icon: 'error',  title: "Ocurrio un error en la solicitud" + error});
              }
    );
  }

  get email(): FormControl {
    return <FormControl>this.form.get('email');
  }

  get password(): FormControl {
    return <FormControl>this.form.get('password');
  }

}
