import { Injectable } from '@angular/core';
import { Course } from '../entities/course/course.model';
import { Observable } from 'rxjs';
import { COURSE_URL } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { CoursePagination } from '../entities/course/course-pagination.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAll(start: number, count: number, orderBy: string, filter?: string): Observable<CoursePagination> {
    return this.http.get<CoursePagination>(COURSE_URL, {
      params: { start: start.toString(), count: count.toString(), orderBy, filter }
    }).pipe(
      tap(coursePagination => coursePagination.courses.map(course => course.creationDate = new Date(course.creationDate))),
    );
  }

  add(course: Course): Observable<Course> {
    return this.http.post<Course>(COURSE_URL, course);
  }

  getById(id: number): Observable<Course> {
    return this.http.get<Course>(`${COURSE_URL}/${id}`).pipe(
      tap(course => course.creationDate = new Date(course.creationDate))
    );
  }

  update(course: Course): Observable<Course> {
    return this.http.put<Course>(`${COURSE_URL}/${course.id}`, course);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${COURSE_URL}/${id}`);
  }

}
