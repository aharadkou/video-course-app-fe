import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { createObservable } from '../utils/observable-utils';
import { KEY_USER_LOGIN, KEY_USER_PASSWORD, KEY_TOKEN } from '../constants/constants';
import { UserCredentials } from '../entities/user/user-credentials';

const USERS: UserCredentials[] = [
  {
    email: 'dadaya@gmail.com',
    password: '12345'
  },
  {
    email: 'justuser@gmail.com',
    password: '112233'
  },
];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private generateFakeToken(): string {
    // TODO: replace fake token generation alhoritm with the real one
    return Math.random().toString(36).substr(2);
  }

  login(login: string, password: string): Observable<UserCredentials> {
    const loggedUser = USERS.find(
      user => user.email === login.trim() && user.password === password.trim()
    );
    if (!loggedUser) {
      return throwError(`Failed to login(${login};${password})`);
    }
    localStorage.setItem(KEY_USER_LOGIN, login);
    localStorage.setItem(KEY_USER_PASSWORD, password);
    localStorage.setItem(KEY_TOKEN, this.generateFakeToken());
    return createObservable(loggedUser);
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
