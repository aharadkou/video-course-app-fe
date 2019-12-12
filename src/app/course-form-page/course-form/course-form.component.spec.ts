import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormComponent } from './course-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteStub } from 'src/app/test/activated-route-stub';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course.service';
import { CourseImpl } from 'src/app/core/entities/course/impl/course-impl.model';
import { createObservable } from 'src/app/core/utils/observable-utils';

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;
  let router: Router;

  const mockCourse = new CourseImpl(1, 'title', new Date(), 10, '', false);
  const activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub();
  const courseServiceSpy: Partial<CourseService> = jasmine.createSpyObj({
    getById: createObservable(mockCourse),
    add: createObservable(undefined),
    update: createObservable(undefined)
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFormComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: CourseService, useValue: courseServiceSpy }
      ]
    })
    .compileComponents();
  }));

  function createComponent() {
    fixture = TestBed.createComponent(CourseFormComponent);
    router = TestBed.get(Router);
    router.navigateByUrl = jasmine.createSpy();
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  describe('ngOnInit', () => {

    it('should get course by id from service if courseId passed as query param', () => {
      activatedRouteStub.setParamMap({courseId: mockCourse.id});
      createComponent();
      expect(courseServiceSpy.getById).toHaveBeenCalledWith(mockCourse.id);
      expect(component.course.id).toBe(mockCourse.id);
    });

    it('should create new course if courseId isnt passed as query param', () => {
      activatedRouteStub.setParamMap({});
      createComponent();
      expect(component.course.id).toBeUndefined();
    });

  });

  describe('save', () => {

    beforeEach(() => {
      createComponent();
    });

    it('should invoke course service add method if course dont has id', () => {
      component.course = new CourseImpl(undefined, '', new Date(), 0, '', false);
      component.save();
      fixture.detectChanges();
      expect(courseServiceSpy.add).toHaveBeenCalledWith(component.course);
    });

    it('should invoke course service update method if course has id', () => {
      component.course = mockCourse;
      component.save();
      fixture.detectChanges();
      expect(courseServiceSpy.update).toHaveBeenCalledWith(component.course);
    });

    afterEach(async(() => {
      expect(router.navigateByUrl).toHaveBeenCalled();
    }));

  });
});
