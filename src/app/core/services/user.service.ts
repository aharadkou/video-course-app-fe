import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KEY_USER_INFO, KEY_TOKEN, AUTHENTICATION_URL } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { tap, map, flatMap } from 'rxjs/operators';
import { UserCredentials } from '../entities/user/user-credentials';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private getUserInfoFromServer(): Observable<UserCredentials> {
    return this.http.get<UserCredentials>(`${AUTHENTICATION_URL}/userInfo`).pipe(
      tap((userCred: UserCredentials) => {
        localStorage.setItem(KEY_USER_INFO, userCred.email);
      })
    );
  }

  login(email: string, password: string): Observable<UserCredentials> {
    return this.http.post(`${AUTHENTICATION_URL}/login`, { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem(KEY_TOKEN, response.token);
      }),
      flatMap(() => this.getUserInfoFromServer())
    );
  }


  getToken(): string {
    return localStorage.getItem(KEY_TOKEN);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(KEY_TOKEN);
  }

  getUserInfo() {
    return localStorage.getItem(KEY_USER_INFO);
  }

}
