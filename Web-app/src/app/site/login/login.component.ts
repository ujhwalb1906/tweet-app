import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginValid = true;
  error: string = ''

  constructor(private userService: UserService, private router: Router) {  }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {
    if(loginForm.value.username){
      const username = loginForm.value.username.trim();
      const password = loginForm.value.password;
      this.userService.authenticate(username, password).subscribe((data) => {
        
        this.isLoginValid = true;
        this.userService.setLoggedIn(true)
        this.userService.setToken(data.token);
        this.userService.setUsername(data.username);
        this.router.navigate(['/']);
        
      } , (error) => {
        this.isLoginValid = false;
        
        if(error.status == 401){
          this.error = 'Invalid Usename/Password';
        }
      })
    }
  }
}