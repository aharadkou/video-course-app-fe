import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KEY_USER_INFO, KEY_TOKEN, AUTHENTICATION_URL } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserCredentials } from '../entities/user/user-credentials';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private getUserInfoFromServer(): Observable<UserCredentials> {
    return this.http.get<UserCredentials>(`${AUTHENTICATION_URL}/userInfo`);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${AUTHENTICATION_URL}/login`, { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem(KEY_TOKEN, response.token);
        this.getUserInfoFromServer().subscribe(userCred => {
          localStorage.setItem(KEY_USER_INFO, userCred.email);
          console.log(userCred);
        });
      })
    );
  }

  getToken(): string {
    return localStorage.getItem(KEY_TOKEN);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(KEY_TOKEN);
    return token != null;
  }

  getUserInfo() {
    return localStorage.getItem(KEY_USER_INFO);
  }

}
