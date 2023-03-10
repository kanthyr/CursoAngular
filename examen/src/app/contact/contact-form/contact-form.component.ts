import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  
  constructor(private _router: Router,
    private _fb: FormBuilder) { 
                this.form = this._fb.group(
                  {
                    username: [ null, [Validators.required, Validators.pattern(RegExp("^[a-z A-Z]+$")) ] ],
                    email: [ null, [ Validators.required, Validators.email ] ],
                    telephone: [ null, [ Validators.required, Validators.pattern(RegExp("^[0-9]+$")), Validators.minLength(10) ] ],
                    message: [ null, [ Validators.required, Validators.maxLength(40) ] ]
                  }
                )
              }

  ngOnInit(): void {
  }

  onSendMessage(): void {
    if (this.form.invalid) { 
      Swal.fire({  icon: 'error',  title: "Hay errores en la solicitud"});
      this.form.markAllAsTouched();
      return;
    }
    Swal.fire({  icon: 'success',  title: "Se realizo con exito la solicitud"});
  }

  onCancel(): void {
    this._router.navigateByUrl('');
  }

  get username(): FormControl {
    return <FormControl>this.form.get('username');
  }

  get email(): FormControl {
    return <FormControl>this.form.get('email');
  }

  get telephone(): FormControl {
    return <FormControl>this.form.get('telephone');
  }

  get message(): FormControl {
    return <FormControl>this.form.get('message');
  }
}
