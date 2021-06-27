import { Component, OnInit, Input, Output } from '@angular/core';
import { PostInfo } from 'src/app/model/Post';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user/user.service';
import { PostService } from 'src/app/services/post/post.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  @Input() post!: PostInfo;

  @Input() i: any;

  @Output("reloadAllPosts") reloadAllPosts: EventEmitter<any> = new EventEmitter();

  @Output("reloadUserPosts") reloadUserPosts: EventEmitter<any> = new EventEmitter();
  
  comment!: string;
  commentflag = false;
  isDeletedPost = false;

  constructor(private userService: UserService, private postService: PostService, private router: Router) { }

  ngOnInit(): void {

  }

  addLikeToPost(tweetid : string){
    this.postService.addLikeToPost(tweetid).subscribe((data) => {
      this.reloadUserPosts.emit();
      this.reloadAllPosts.emit();
    })
  }

  deletePost(postId: String) {
    this.isDeletedPost = true;
    this.postService.deletePost(postId).subscribe((data) => {      
        this.isDeletedPost = false;
        this.reloadUserPosts.emit();
        this.reloadAllPosts.emit();
    },(error) => {
        this.isDeletedPost = false;
    })
  }

  addcomment(tweetid: string) {
    if (this.comment) {
      if (this.comment.trim()) {
        this.commentflag = true;
        const commentmessage = {
            commentMessage : this.comment.trim()
        }
        this.postService.addCommentToPost(commentmessage , tweetid).subscribe((data) => {
          setTimeout(() => {
            this.commentflag = false;
            this.reloadAllPosts.emit();
            this.reloadUserPosts.emit();
          }, 2000);
        })
      }
    } 
  }

  editPost(tweetId: String) {
    this.router.navigate(['/edit-tweet', tweetId])
  }

  isUserValid(val: String) {
    if (val == this.userService.getUsername()) {
      return true;
    } else {
      return false;
    }
  }

  isAuthenticated() {
    return this.userService.isLoggedIn();
  }

}
