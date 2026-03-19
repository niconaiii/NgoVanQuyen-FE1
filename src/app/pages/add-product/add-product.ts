import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  addProForm: FormGroup;

  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addProForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.min(1)],
      // category: ['']
    });
  }

  get name() {
    return this.addProForm.get('name');
  }
  get price() {
    return this.addProForm.get('price');
  }
  // get category() {
  //   return this.addProForm.get('category');
  // }

  submitForm() {
    this.loading = true;
    this.error = '';
    console.log(this.addProForm.value);

    const data = this.addProForm.value;

    this.http.post('http://localhost:3000/products', data).subscribe({
      next: () => {
        this.loading = false;
        alert("Them than cong")
        this.addProForm.reset();
      },
      error: () => {
        this.loading = false;
        alert('them that bai')
      }
    })

  }
}
