import { Course } from '../core/entities/course/course.model';
import { CourseImpl } from '../core/entities/course/impl/course-impl.model';

const mockDescription = `Learn about where you can find course descriptions, what information they include, how they work,
and details about various components of a course description.
Learn about where you can find course descriptions, what information they include, how they work,
and details about various components of a course description.
Learn about where you can find course descriptions, what information they include, how they work,
and details about various components of a course description. `;

export const courses: Course[] = [
    new CourseImpl(1, 'Course 1', new Date(2019, 9, 10), 55, mockDescription, true),
    new CourseImpl(2, 'Course 2', new Date(2019, 11, 12), 75, mockDescription, false),
    new CourseImpl(3, 'Course 3', new Date(2019, 10, 24), 135, mockDescription, true),
];
