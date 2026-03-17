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

  constructor(private fb: FormBuilder){
    this.addProForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.min(1)],
      category: ['']
    })
  }

  get name() {
    return this.addProForm.get('name');
  }
  get price() {
    return this.addProForm.get('price');
  }
  get category() {
    return this.addProForm.get('category');
  }

  submitForm(){
    console.log(this.addProForm.value);
    
  }
}
