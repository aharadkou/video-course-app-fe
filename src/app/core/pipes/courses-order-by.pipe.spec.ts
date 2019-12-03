import { CoursesOrderByPipe } from './courses-order-by.pipe';
import { Course } from '../entities/course/course.model';
import { CourseImpl } from '../entities/course/impl/course-impl.model';

const mockCourses: Course[] = [
  new CourseImpl(1, '', new Date(2019, 10, 10), 55, '', true),
  new CourseImpl(2, '', new Date(2019, 9, 12), 75, '', false),
  new CourseImpl(3, '', new Date(2019, 11, 12), 75, '', false),
];


describe('CoursesOrderByPipe', () => {
  it('should order courses by date', () => {
    const pipe = new CoursesOrderByPipe();
    const mockCoursesCopy = mockCourses.slice();
    const sorted = pipe.transform(mockCourses);
    expect(sorted[0]).toBe(mockCoursesCopy[1]);
    expect(sorted[1]).toBe(mockCoursesCopy[0]);
  });
});
