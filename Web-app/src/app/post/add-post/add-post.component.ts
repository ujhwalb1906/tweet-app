import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor( private postService: PostService, private router : Router ) { }

  addPostForm!: FormGroup;
  posted = false;
  posting = false; 
  posteditederror = false;

  ngOnInit(): void {
    this.addPostForm = new FormGroup({
      id: new FormControl(null),
      postMessage: new FormControl(null ),
      hasTag: new FormControl(null)
    })
  }

  onSubmitForm() {
    if(this.addPostForm.value.hasTag){
      this.addPostForm.patchValue({
        hasTag: this.addPostForm.value.hasTag.split('#')[1] ? this.addPostForm.value.hasTag.split('#')[1] : this.addPostForm.value.hasTag
      })
    }
    this.postService.addPost(this.addPostForm.value).subscribe((data) => {
      this.posting = true;
      this.posteditederror = false;
      setTimeout(() => {
        this.posting = false;
        this.posted = true ;
      }, 3000);
    }, (error) => {
      if (error.status != 401) {
        this.posteditederror = true;
      }
    })
  }
}