import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditPageComponent } from './course-edit-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouteStub } from 'src/app/test/activated-route-stub';
import { CourseImpl } from 'src/app/core/entities/course/impl/course-impl.model';
import { createObservable } from 'src/app/core/utils/observable-utils';

const mockCourse = new CourseImpl(1, 'title', new Date(), 10, '', false);

describe('CourseEditPageComponent', () => {
  let component: CourseEditPageComponent;
  let fixture: ComponentFixture<CourseEditPageComponent>;
  const courseServiceSpy: Partial<CourseService> = jasmine.createSpyObj({
    getById: createObservable(mockCourse),
    update: createObservable(undefined)
  });
  const activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseEditPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: CourseService, useValue: courseServiceSpy }
      ]
    })
    .compileComponents();
  }));

  function createComponent() {
    fixture = TestBed.createComponent(CourseEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  describe('ngOnInit', () => {
    it('should get course by id from service', () => {
      activatedRouteStub.setParamMap({courseId: mockCourse.id});
      createComponent();
      expect(courseServiceSpy.getById).toHaveBeenCalledWith(mockCourse.id);
      expect(component.course.id).toBe(mockCourse.id);
    });
  });

  describe('update', () => {
    let router: Router;

    beforeEach(() => {
      createComponent();
      router = TestBed.get(Router);
      router.navigateByUrl = jasmine.createSpy();
      component.update(undefined);
    });

    it('should invoke service update method', () => {
      expect(courseServiceSpy.update).toHaveBeenCalledWith(undefined);
    });

    it('should navigate to courses', () => {
      expect(router.navigateByUrl).toHaveBeenCalledWith('/courses');
    });
  });

});
