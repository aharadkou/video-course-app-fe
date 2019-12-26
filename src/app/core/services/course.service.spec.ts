
import { CourseService } from './course.service';
import { CourseImpl } from '../entities/course/impl/course-impl.model';
import { Course } from '../entities/course/course.model';
import { async, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CourseService ]
    });
    service = TestBed.get(CourseService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should get all', async(() => {

  }));

  describe('getById', () => {
    it('should get course with existing id', async(() => {
      const existingId = 1;
      service.getById(existingId).subscribe(course => expect(course.id).toBe(existingId));
    }));

    it('should throw error with nonexistent id', async(() => {
      const nonexistentId = 77;
      service.getById(nonexistentId).subscribe(
        {
          error: (error: Error) => expect(error).toBeTruthy()
        }
      );
    }));
  });

  describe('update', () => {

    let added: Course;
    beforeEach(() => {
      added = new CourseImpl(0, '', new Date(), 2, 'descr', true);
      service.add(added).subscribe(course => added = course);
    });

    it('should update existing course', async(() => {
        const newDescription = 'newDescr';
        const updated = new CourseImpl(added.id, '', new Date(), 2, newDescription, true);
        service.update(updated).subscribe(course => expect(course.description).toBe(newDescription));
    }));

    afterEach(() => {
      service.deleteById(added.id);
    });

  });

});
