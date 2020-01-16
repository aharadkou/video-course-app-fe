
import { CourseService } from './course.service';
import { CourseImpl } from '../entities/course/impl/course-impl.model';
import { Course } from '../entities/course/course.model';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { COURSE_URL } from '../constants/constants';

describe('CourseService', () => {

  const mockCourses: Course[]  = [
    new CourseImpl(1, 'Course 1', new Date(), 55, 'descr1', true),
    new CourseImpl(2, 'Course 2', new Date(), 75, 'descr2', false),
    new CourseImpl(3, 'Course 3', new Date(), 135, 'descr3', true),
  ];
  let service: CourseService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.get(CourseService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  function getQueryString(params: any): string {
    const queryParams = new URLSearchParams();
    for (const property in params) {
      if (params.hasOwnProperty(property)) {
        queryParams.set(property, params[property]);
      }
    }
    return queryParams.toString();
  }

  describe('getAll', () => {
    it('should send get request and receive all courses in response', () => {
      const params = {
        start: 0,
        count: 0,
        orderBy: 'order',
        filter: 'filter'
      };
      const responseBody = { courses: mockCourses, total: mockCourses.length };
      service.getAll(params.start, params.count, params.orderBy, params.filter).subscribe(
        coursePagination => expect(responseBody).toEqual(coursePagination)
      );
      const request = httpMock.expectOne(`${COURSE_URL}?${getQueryString(params)}`);
      expect(request.request.method).toBe('GET');
      request.flush(responseBody);
    });
  });

  describe('getById', () => {
    it('should send get request and receive course by id in response', () => {
      const expectedCourse = mockCourses[0];
      service.getById(expectedCourse.id).subscribe(
        course => expect(course).toEqual(expectedCourse)
      );
      const request = httpMock.expectOne(`${COURSE_URL}/${expectedCourse.id}`);
      expect(request.request.method).toBe('GET');
    });
  });

  describe('add', () => {
    it('should send added course in post request and receive it in response', () => {
      const expectedCourse = mockCourses[0];
      service.add(expectedCourse).subscribe(
        course => expect(course).toEqual(expectedCourse)
      );
      const request = httpMock.expectOne(COURSE_URL);
      expect(request.request.method).toBe('POST');
      request.flush(expectedCourse);
    });
  });

  describe('update', () => {
    it('should send update course in post request and receive it in response', () => {
      const expectedCourse = mockCourses[0];
      service.update(expectedCourse).subscribe(
        course => expect(course).toEqual(expectedCourse)
      );
      const request = httpMock.expectOne(`${COURSE_URL}/${expectedCourse.id}`);
      expect(request.request.method).toBe('PUT');
      request.flush(expectedCourse);
    });
  });

  describe('deleteById', () => {
    it('should send delete request', () => {
      const courseId = 1;
      service.deleteById(courseId).subscribe(
        response => expect(response).toEqual(null)
      );
      const request = httpMock.expectOne(`${COURSE_URL}/${courseId}`);
      expect(request.request.method).toBe('DELETE');
      request.flush(null);
    });
  });

});
