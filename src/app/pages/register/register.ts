import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  addReForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addReForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get password() {
    return this.addReForm.get('password');
  }
  get username() {
    return this.addReForm.get('username');
  }
  get email() {
    return this.addReForm.get('email');
  }
  submitForm() {
    console.log(this.addReForm.value);
  }
}
