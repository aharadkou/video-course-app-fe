import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../entities/course/course.model';
import { Observable } from 'rxjs';
import { CourseImpl } from '../entities/course/impl/course-impl.model';
import { courses } from 'src/app/course-page/courses';

@Injectable({
  providedIn: 'root'
})
export class InMemoryCourseService extends CourseService {

private static mockDescription = `Learn about where you can find course descriptions, what information they include, how they work,
and details about various components of a course description.
Learn about where you can find course descriptions, what information they include, how they work,
and details about various components of a course description.
Learn about where you can find course descriptions, what information they include, how they work,
and details about various components of a course description. `;

private static courses: Course[]  = [
  new CourseImpl(1, 'Course 1', new Date(2019, 9, 10), 55, InMemoryCourseService.mockDescription, true),
  new CourseImpl(2, 'Course 2', new Date(2019, 11, 12), 75, InMemoryCourseService.mockDescription, false),
  new CourseImpl(3, 'Course 3', new Date(2019, 10, 24), 135, InMemoryCourseService.mockDescription, true),
];

  constructor() {
    super();
  }

  private createObservble(value: any): Observable<any> {
    return new Observable(observer => observer.next(value));
  }

  getAll(): Observable<Course[]> {
    return this.createObservble(courses.slice());
  }

  add(course: Course): Observable<Course> {
    courses.push(course);
    course.id = courses[courses.length - 1].id || 1;
    return this.createObservble(course);

  }

  private getCourseById(id: number): Course {
    return courses.find(course => course.id === id);
  }

  getById(id: number): Observable<Course> {
    const findedCourse = this.getCourseById(id);
    if (findedCourse === undefined) {
      throw new Error(`Course with id=${id} isn't found`);
    }
    return this.createObservble(findedCourse);
  }

  update(course: Course): Observable<Course> {
    const updated = this.getCourseById(course.id);
    courses[courses.indexOf(updated)] = course;
    return this.createObservble(updated);
  }

  delete(course: Course | number): Observable<any> {
    const deleted = typeof course === 'number' ? this.getCourseById(course) : this.getCourseById(course.id);
    courses.splice(courses.indexOf(deleted), 1);
    return new Observable();

  }


}
