import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/header/header.component';
import { SignupComponent } from './site/signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './site/change-password/change-password.component';
import { PostInfoComponent } from './post/post-info/post-info.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { UserPostsComponent } from './post/user-posts/user-posts.component';
import { AllPostsComponent } from './post/all-posts/all-posts.component';
import { DateAgoPipe } from './util/date-ago.pipe';
import { AddPostComponent } from './post/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    ChangePasswordComponent,
    PostInfoComponent,
    PostEditComponent,
    UserPostsComponent,
    AllPostsComponent,
    DateAgoPipe,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
