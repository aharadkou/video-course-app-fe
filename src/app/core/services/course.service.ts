import { Injectable } from '@angular/core';
import { Course } from '../entities/course/course.model';
import { Observable, throwError } from 'rxjs';
import { CourseImpl } from '../entities/course/impl/course-impl.model';
import { createObservable } from '../helpers/observable-helpers';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private static mockDescription = `Learn about where you can find course descriptions, what information they include, how they work,
  and details about various components of a course description.
  Learn about where you can find course descriptions, what information they include, how they work,
  and details about various components of a course description.
  Learn about where you can find course descriptions, what information they include, how they work,
  and details about various components of a course description. `;

  private static courses: Course[]  = [
    new CourseImpl(1, 'Course 1', new Date(2019, 9, 10), 55, CourseService.mockDescription, true),
    new CourseImpl(2, 'Course 2', new Date(2019, 11, 12), 75, CourseService.mockDescription, false),
    new CourseImpl(3, 'Course 3', new Date(2019, 10, 24), 135, CourseService.mockDescription, true),
  ];

  getAll(): Observable<Course[]> {
    return createObservable(CourseService.courses.slice());
  }

  add(course: Course): Observable<Course> {
    CourseService.courses.push(course);
    course.id = CourseService.courses[CourseService.courses.length - 1].id || 1;
    return createObservable(course);

  }

  private getCourseById(id: number): Course {
    return CourseService.courses.find(course => course.id === id);
  }

  getById(id: number): Observable<Course> {
    const findedCourse = this.getCourseById(id);
    if (findedCourse === undefined) {
      throwError(`Course with id=${id} isn't found`);
    }
    return createObservable(findedCourse);
  }

  update(course: Course): Observable<Course> {
    const updated = this.getCourseById(course.id);
    CourseService.courses[CourseService.courses.indexOf(updated)] = course;
    return createObservable(course);
  }

  delete(course: Course | number): Observable<any> {
    const deleted = typeof course === 'number' ? this.getCourseById(course) : this.getCourseById(course.id);
    CourseService.courses.splice(CourseService.courses.indexOf(deleted), 1);
    return createObservable(course);
  }

}
