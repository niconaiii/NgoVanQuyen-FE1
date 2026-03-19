import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      views: ['', Validators.min(0)],
    });
  }
  submitForm() {
    console.log('Form', this.addForm.value);

    this.loading = true;
    this.error = '';

    const data = this.addForm.value;

    this.http.post('http://localhost:3000/stories', data).subscribe({
      next: () => {
        this.loading = false;
        alert('Them thanh cong');
        this.addForm.reset();
      },
      error: () => {
        this.loading = false;
        alert('Them that bai');
      },
    });
  }
  get title() {
    return this.addForm.get('title');
  }
}
