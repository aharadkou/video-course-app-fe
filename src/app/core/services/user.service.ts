import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTHENTICATION_URL } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from '../entities/user/user-credentials';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<{ token: string, user: UserCredentials }> {
    return this.http.post<{ token: string, user: UserCredentials }>(`${AUTHENTICATION_URL}/login`, { email, password });
  }

}
