import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-page.html',
  styleUrl: './edit-page.css',
})
export class EditPage {
editForm: FormGroup;
id: any

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {
    this.editForm = this.fb.group({
      title: "",
      author: "",
      view: ""
    })
  }
  
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id){
      this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
        next: (data:any) => {
          this.editForm.patchValue({
            title: data.title,
            author: data.author,
            view: data.view
            // data
          })
        }
      })
    }
  }

  submitForm(){
    this.http.put(`http://localhost:3000/stories/${this.id}`, this.editForm.value).subscribe({
      next: () => {
        alert("Sửa TC")
      },
      error: () => {
        alert("Sửa TB")
      }
    })
  }
}
