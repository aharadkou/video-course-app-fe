import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { createObservable } from '../helpers/observable-helpers';

@Injectable({
  providedIn: 'root'
})
export class InMemoryUserService implements UserService {

  public static readonly KEY_TOKEN = 'token';

  public static readonly KEY_USER_LOGIN = 'login';

  public static readonly KEY_USER_PASSWORD = 'password';

  private generateFakeToken(): string {
    return Math.random().toString(36).substr(2);
  }

  login(login: string, password: string): Observable<any> {
    localStorage.setItem(InMemoryUserService.KEY_USER_LOGIN, login);
    localStorage.setItem(InMemoryUserService.KEY_USER_PASSWORD, password);
    localStorage.setItem(InMemoryUserService.KEY_TOKEN, this.generateFakeToken());
    return new Observable();
  }

  logout(): Observable<any> {
    localStorage.clear();
    return new Observable();
  }

  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem(InMemoryUserService.KEY_TOKEN);
    return createObservable(token != null);
  }

  getUserInfo(): Observable<string> {
    const userLogin = localStorage.getItem(InMemoryUserService.KEY_USER_LOGIN);
    return createObservable(userLogin);
  }

}
