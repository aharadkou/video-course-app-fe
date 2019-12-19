import { Injectable } from '@angular/core';
import { Course } from '../entities/course/course.model';
import { Observable, throwError } from 'rxjs';
import { CourseImpl } from '../entities/course/impl/course-impl.model';
import { createObservable } from '../utils/observable-utils';
import { Author } from '../entities/user/impl/author.model';
import { User } from '../entities/user/user.model';

const MOCK_DESCRIPTION = `Learn about where you can find course descriptions, what information they include, how they work,
and details about various components of a course description.
Learn about where you can find course descriptions, what information they include, how they work,
and details about various components of a course description.`;

const AUTHORS: User[] = [
  new Author(1, 'Valeriy', 'Zhmyshenko'),
  new Author(2, 'Ivan', 'Ivanov'),
  new Author(3, 'Petr', 'Ivanov')
];

const COURSES: Course[]  = [
  new CourseImpl(1, 'Course 1', new Date(2019, 9, 10), 55, MOCK_DESCRIPTION, true),
  new CourseImpl(2, 'Course 2', new Date(2019, 11, 12), 75, MOCK_DESCRIPTION, false),
  new CourseImpl(3, 'Course 3', new Date(2019, 10, 24), 135, MOCK_DESCRIPTION, true),
];

COURSES[0].authors = AUTHORS.slice();
COURSES[1].authors = AUTHORS.slice(1);
COURSES[2].authors = AUTHORS.slice(0, 2);

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getAll(): Observable<Course[]> {
    return createObservable(COURSES.slice());
  }

  add(course: Course): Observable<Course> {
    COURSES.push(course);
    course.id = COURSES[COURSES.length - 1].id || 1;
    return createObservable(course);

  }

  private getCourseById(id: number): Course {
    return COURSES.find(course => course.id === id);
  }

  getById(id: number): Observable<Course> {
    const findedCourse = this.getCourseById(id);
    if (findedCourse === undefined) {
      return throwError(`Course with id=${id} isn't found`);
    }
    return createObservable(findedCourse);
  }

  update(course: Course): Observable<Course> {
    const updated = this.getCourseById(course.id);
    COURSES[COURSES.indexOf(updated)] = course;
    return createObservable(course);
  }

  deleteById(id: number): Observable<Course> {
    const deleted = this.getCourseById(id);
    COURSES.splice(COURSES.indexOf(deleted), 1);
    return createObservable(id);
  }

}
