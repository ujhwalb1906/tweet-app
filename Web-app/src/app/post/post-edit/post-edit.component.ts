import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { PostInfo } from 'src/app/model/Post';
import { error } from 'protractor';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  editPostForm!: FormGroup;
  postedited = false;
  posteditederror = false;

  ngOnInit(): void {
    this.editPostForm = new FormGroup({
      id: new FormControl(null),
      postMessage: new FormControl(null),
      hasTag: new FormControl(null)
    })

    this.route.params.subscribe((params: Params) => {
      const tweetId = params['tweetId'];
      this.postService.getPostByID(tweetId).subscribe((post: PostInfo) => {
        this.editPostForm.patchValue({
          id: post.id,
          postMessage: post.postMessage,
          hasTag: '#' + post.hasTag
        })
      })
    })
  }

  onSubmitForm() {
    this.editPostForm.patchValue({
      hasTag: this.editPostForm.value.hasTag.split('#')[1] ? this.editPostForm.value.hasTag.split('#')[1] : this.editPostForm.value.hasTag
    })
    this.postService.modifyPost(this.editPostForm.value).subscribe((data) => {
      this.postedited = true;
      this.posteditederror = false;
    }, (error) => {
      if (error.status != 401) {
        this.posteditederror = true;
      }
    })
  }
}