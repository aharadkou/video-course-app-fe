import { Observable } from 'rxjs';
import { Course } from '../entities/course/course.model';

export abstract class CourseService {
    abstract getAll(): Observable<Course[]>;
    abstract add(course: Course): Observable<Course>;
    abstract getById(id: number): Observable<Course>;
    abstract update(course: Course): Observable<Course>;
    abstract delete(course: Course | number): Observable<any>;
}
