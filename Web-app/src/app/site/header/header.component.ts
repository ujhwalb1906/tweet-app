import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { PostService } from 'src/app/services/post/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private postService:PostService, private router: Router) { }

  ngOnInit(): void {
  }

  isAuthenticated() {
    return this.userService.isLoggedIn();
  }

  OnSearchPeople(event : any){
    this.router.navigate(['/']);
    this.postService.filter.next(event.target.value);    
  }

  getUsername(){
    return this.userService.getUsername();
  }

  logout(){
    this.userService.logOut();
  }

}
