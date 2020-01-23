import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AUTHOR_URL } from '../constants/constants';
import { Observable } from 'rxjs';
import { Author } from '../entities/course/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAllFiltered(filter: string, selectedIds: number[]): Observable<Author[]> {
    let params = new HttpParams();
    params = params.set('filter', filter);
    selectedIds.forEach(selectedId =>
      params = params.append('selectedIds[]', selectedId.toString())
    );
    return this.http.get<Author[]>(AUTHOR_URL, { params });
  }

}
