import { Injectable } from '@angular/core';
import { Course } from '../entities/course/course.model';
import { Observable } from 'rxjs';
import { SERVER_URL } from '../constants/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAll(start: number, count: number, orderBy?: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${SERVER_URL}/courses`, {
      params: { start: start.toString(), count: count.toString(), orderBy }
    });
  }

  find(searchValue: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${SERVER_URL}/courses/find/${searchValue}`);
  }

  add(course: Course): Observable<Course> {
    return this.http.post<Course>(`${SERVER_URL}/courses`, course);
  }

  getById(id: number): Observable<Course> {
    return this.http.get<Course>(`${SERVER_URL}/courses/${id}`);
  }

  update(course: Course): Observable<Course> {
    return this.http.put<Course>(`${SERVER_URL}/courses/${course.id}`, course);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${SERVER_URL}/courses/${id}`);
  }

}
