import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { PostService } from 'src/app/services/post/post.service';
import { Router } from '@angular/router';
import { PostInfo } from 'src/app/model/Post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private userService: UserService, private postService: PostService, private router: Router) { }

  allPosts: PostInfo[] = [];
  searchPosts: PostInfo[] = [];

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data) => {
      
      this.allPosts = data;
      this.searchPosts = data;
      
    }, (error) => {
      if (error.status != 401) {
      
      }
    });

    this.postService.filter.subscribe((author) => {
      if (author !== '') {
        const result = this.searchPosts.filter(
          post => post.author.toLocaleLowerCase().includes(author.toLocaleLowerCase())
        );
        this.allPosts = result ? result : [];
      } else {
        this.allPosts = this.searchPosts;
      }
    })
  }

  reloadAllPosts() {
    this.postService.getAllPosts().subscribe((data) => {
      this.allPosts = data;
      this.searchPosts = data;
    }, (error) => {
      if (error.status != 401) {
      }
    });
  } 
}