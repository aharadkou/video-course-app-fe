import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../entities/user/impl/author.model';
import { AUTHOR_URL } from '../constants/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(AUTHOR_URL);
  }

}
