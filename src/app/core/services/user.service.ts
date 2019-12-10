import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createObservable } from '../helpers/observable-helpers';
import { KEY_USER_LOGIN, KEY_USER_PASSWORD, KEY_TOKEN } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private generateFakeToken(): string {
    return Math.random().toString(36).substr(2);
  }

  login(login: string, password: string): Observable<any> {
    localStorage.setItem(KEY_USER_LOGIN, login);
    localStorage.setItem(KEY_USER_PASSWORD, password);
    localStorage.setItem(KEY_TOKEN, this.generateFakeToken());
    return new Observable();
  }

  logout(): Observable<any> {
    localStorage.clear();
    return new Observable();
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
