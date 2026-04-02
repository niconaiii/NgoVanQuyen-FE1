import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      username: '',
      email: '',
      password: ''
    })
  }

  submitForm(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched()
      return
    }

    const data = this.registerForm.value
    this.http.post(`http://localhost:3000/register`, data).subscribe({
      next: () => {
        alert("Đăng ký thành công")
        this.router.navigateByUrl("/login")
      },
      error: () => {
        alert("Đăng ký thất bại")
      }
    })
  }
}
