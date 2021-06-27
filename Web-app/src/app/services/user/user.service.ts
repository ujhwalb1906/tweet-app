import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Register } from 'src/app/model/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient, private router : Router) { }

  authenticationUrl = environment.baseUrl + 'login';

  registerUrl = environment.baseUrl + 'register';

  private loggedIn = false;
  private token: string = '';
  private username: string = '';

  setLoggedIn(loggedIn : boolean) {
    this.loggedIn = loggedIn;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  setUsername(username: string) {
    this.username = username;
  }


  getUsername() {
    return this.username;
  }


  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  logOut() {
    this.token = '';
    this.username = '';
    this.loggedIn = false;
    this.router.navigate(['/login'])
  }

  public authenticate(username: string, password: string): Observable<any> {
    let credentials = btoa(username + ':' + password)
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials);
    return this.httpClient.get(this.authenticationUrl, { headers });
  }

  public addUser(user: Register): Observable<any> {
    return this.httpClient.post<void>(this.registerUrl, user);
  }

}