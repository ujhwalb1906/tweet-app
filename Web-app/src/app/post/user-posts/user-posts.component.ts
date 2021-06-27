import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { PostInfo } from 'src/app/model/Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  userPosts: PostInfo[] = [];
  sessionTimedOut = false ;
  ngOnInit(): void {
    this.postService.getUserPosts().subscribe((data) => {
      this.userPosts = data;
    }, (error) => {
      if (error.status == 401) {
        this.sessionTimedOut = true;
      setTimeout(() => {
        this.sessionTimedOut = false;
        this.router.navigate(['/login']);
      }, 3000);
      }
    });
  }

  reloadUserPosts() {
    this.postService.getUserPosts().subscribe((data) => {
      this.userPosts = data;
    }, (error) => {
      if (error.status == 401) {
        this.sessionTimedOut = true;
      setTimeout(() => {
        this.sessionTimedOut = false;
        this.router.navigate(['/login']);
      }, 3000);
      } else {
        this.userPosts = []; 
      }
    });
  }
}
