import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { createObservable } from '../utils/observable-utils';
import { KEY_USER_LOGIN, KEY_USER_PASSWORD, KEY_TOKEN, SERVER_URL } from '../constants/constants';
import { UserCredentials } from '../entities/user/user-credentials';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    this.http.post(`${SERVER_URL}/login`, { email, password }).subscribe(
      (response: any) => {
        localStorage.setItem(KEY_TOKEN, response.token);
      },
      (error: any) => console.error(error)
    );
  }

  getToken(): string {
    return localStorage.getItem(KEY_TOKEN);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem(KEY_TOKEN);
    return createObservable(token != null);
  }

  getUserInfo(): Observable<string> {
    const userLogin = localStorage.getItem(KEY_USER_LOGIN);
    return createObservable(userLogin);
  }

}
