import { TestBed } from '@angular/core/testing';

import { InMemoryCourseService } from './in-memory-course.service';

describe('CourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryCourseService = TestBed.get(InMemoryCourseService);
    expect(service).toBeTruthy();
  });
});
