import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTHENTICATION_URL } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserCredentials } from '../entities/user/user-credentials';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<UserCredentials> {
    return this.http.get<UserCredentials>(`${AUTHENTICATION_URL}/userInfo`);
  }

  login(email: string, password: string): Observable<string> {
    return this.http.post<{ token: string }>(`${AUTHENTICATION_URL}/login`, { email, password }).pipe(
      map((responseToken: { token: string }) => responseToken.token)
    );
  }

}
