import { CourseFindPipe } from './course-find.pipe';
import { Course } from '../entities/course/course.model';
import { CourseImpl } from '../entities/course/impl/course-impl.model';

const mockCourses: Course[] = [
  new CourseImpl(1, 'Name1', new Date(), 1, '', false),
  new CourseImpl(1, 'afa    naMe1 wfafw   ', new Date(), 1, '', false)
];
const pipe = new CourseFindPipe();

describe('CourseFindPipe', () => {
  it('should find courses by title name1', () => {
    const title = 'name1';
    expect(pipe.transform(mockCourses, title).length).toBe(mockCourses.length);
  });

  it('shouldnt find courses by title name2', () => {
    const title = 'name2';
    expect(pipe.transform(mockCourses, title).length).toBe(0);
  });
});
