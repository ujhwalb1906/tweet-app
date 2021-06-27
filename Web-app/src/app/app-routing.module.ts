import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { ChangePasswordComponent } from './site/change-password/change-password.component';
import { AllPostsComponent } from './post/all-posts/all-posts.component';
import { UserPostsComponent } from './post/user-posts/user-posts.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { AddPostComponent } from './post/add-post/add-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-all-posts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'view-all-posts', component: AllPostsComponent },
  { path: 'user-posts', component: UserPostsComponent },
  { path: 'edit-tweet/:tweetId', component: PostEditComponent },
  { path: 'add-tweet', component: AddPostComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }