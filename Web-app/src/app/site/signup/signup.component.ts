import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Register } from 'src/app/model/User';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  createdUser = false;
  errorUser = false;

  newUser! : Register;
  constructor(private userService: UserService, private router: Router) {

  }

  signupForm!: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(20), Validators.pattern('^[a-z A-Z]*')]),
      'lastName': new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(20), Validators.pattern('^[a-z A-Z]*')]),
      'username': new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(40)]),
      'email': new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      'password': new FormControl(null, [Validators.required]),
      'confirmpassword': new FormControl(null, [Validators.required]),
      'contactNumber': new FormControl(null, [Validators.required, Validators.maxLength(13), Validators.pattern('^[0-9+]*')])
    });
   }

  onSubmitSignupForm() {
    this.userService.addUser(this.signupForm.value).subscribe((data) => {
      this.errorUser = false;
      this.createdUser = true;
      setTimeout(() => {
        this.createdUser = false;
        this.router.navigate(['/login']);
          }, 5000);      
    },(error) => {
      this.errorUser = true;
      
    })
  }

  isConfirmPasswordValid() {
    if ((this.signupForm.get('password')?.value != null) && this.signupForm.get('confirmpassword')?.value != null) {
      if ((this.signupForm.get('password')?.value != this.signupForm.get('confirmpassword')?.value)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
