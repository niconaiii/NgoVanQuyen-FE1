import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-story',
  imports: [],
  templateUrl: './edit-story.html',
  styleUrl: './edit-story.css',
})
export class EditStory {
  editForm: FormGroup;

  id: any
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.editForm = this.fb.group({
      title: "",
      author: "",
      views: ""
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
            views: data.views
          })
        }
      })
    }
  }

  

}
