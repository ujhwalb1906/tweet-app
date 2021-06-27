import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Observable, Subject } from 'rxjs';
import { PostInfo } from 'src/app/model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private userService: UserService, private httpClient: HttpClient) { }

  filter = new Subject<string>();

  getAllPostsUrl = environment.baseUrl + 'all';
  getUserPostsUrl = environment.baseUrl;    //append username
  getPostByIdUrl = environment.baseUrl + 'tweetBy/';  //append postId
  deletePostByIdUrl = environment.baseUrl + 'delete/';   //append postId
  updatePostUrl = environment.baseUrl + 'update/';  //append postId

  addPostUrl = environment.baseUrl;  //append postId
  addCommentUrl = environment.baseUrl;  //append postId

  addLikeUrl = environment.baseUrl + 'like/';  //append postId

  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userService.getToken()
      })
    }
    return httpOptions;
  }

  getAllPosts(): Observable<any> {
    return this.httpClient.get(this.getAllPostsUrl)
  }

  getUserPosts(): Observable<any> {
    return this.httpClient.get(this.getUserPostsUrl + this.userService.getUsername(), this.getHttpOptions());
  }

  deletePost(postId: String): Observable<any> {
    return this.httpClient.delete(this.deletePostByIdUrl + postId, this.getHttpOptions());
  }

  getPostByID(postId: string): Observable<any> {
    return this.httpClient.get(this.getPostByIdUrl + postId, this.getHttpOptions());
  }

  modifyPost(post: PostInfo): Observable<any> {
    return this.httpClient.put(this.updatePostUrl + post.id, post, this.getHttpOptions());
  }

  addPost(post: PostInfo): Observable<any> {
    return this.httpClient.post(`${this.addPostUrl}${this.userService.getUsername()}/add`, post, this.getHttpOptions());
  }

  addCommentToPost(comment: any, tweetId : string): Observable<any> {
    return this.httpClient.post(`${this.addPostUrl}${this.userService.getUsername()}/comment/${tweetId}`, comment, this.getHttpOptions());
  }

  addLikeToPost(tweetId : string): Observable<any> {
    return this.httpClient.put(`${this.addLikeUrl}${tweetId}`,null, this.getHttpOptions());
  }
}