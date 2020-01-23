import { Injectable } from '@angular/core';
import { Course } from '../entities/course/course.model';
import { Observable } from 'rxjs';
import { COURSE_URL } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { CoursePagination } from '../entities/course/course-pagination.model';
import { tap } from 'rxjs/operators';
import { restoreCourseDate } from '../utils/date-utils';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAll(start: number, count: number, orderBy: string, filter?: string): Observable<CoursePagination> {
    return this.http.get<CoursePagination>(COURSE_URL, {
      params: { start: start.toString(), count: count.toString(), orderBy, filter }
    }).pipe(
      tap(coursePagination => coursePagination.courses.map(course => restoreCourseDate(course)))
    );
  }

  add(course: Course): Observable<Course> {
    return this.http.post<Course>(COURSE_URL, course).pipe(
      tap(addedCourse => restoreCourseDate(addedCourse))
    );
  }

  getById(id: number): Observable<Course> {
    return this.http.get<Course>(`${COURSE_URL}/${id}`).pipe(
      tap(course => restoreCourseDate(course))
    );
  }

  update(course: Course): Observable<Course> {
    return this.http.put<Course>(`${COURSE_URL}/${course.id}`, course).pipe(
      tap(updatedCourse => restoreCourseDate(updatedCourse))
    );
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${COURSE_URL}/${id}`);
  }

}
