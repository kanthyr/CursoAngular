import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  hide: boolean = true;

  constructor( private _fb: FormBuilder, 
    private _authService: AuthService,
    private _router: Router) {
    this.form = this._fb.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      last_name: [null, Validators.required],
      password: [null, Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onRegister(): void {
    if (this.form.invalid) { 
      this.form.markAllAsTouched();
      return;
    }
    this._authService.register(this.form.value).subscribe(
       data => {
        console.log(data);
        Swal.fire({  icon: 'success',  title: "Se realizo con exito la solicitud ",  text: data.status});
        this._router.navigateByUrl('');
              },
       error => {
        console.log("Ocurrio un error: ", error);
        Swal.fire({  icon: 'error',  title: "Ocurrio un error en la solicitud " + error});
              }
    );
  }

  get username(): FormControl {
    return <FormControl>this.form.get('username');
  }

  get email(): FormControl {
    return <FormControl>this.form.get('email');
  }

  get last_name(): FormControl {
    return <FormControl>this.form.get('last_name');
  }

  get password(): FormControl {
    return <FormControl>this.form.get('password');
  }

}
