import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddPageComponent } from './course-add-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { RouterTestingModule } from '@angular/router/testing';
import { createObservable } from 'src/app/core/utils/observable-utils';
import { Router } from '@angular/router';

describe('CourseAddPageComponent', () => {
  let component: CourseAddPageComponent;
  let fixture: ComponentFixture<CourseAddPageComponent>;
  const courseServiceSpy: Partial<CourseService> = jasmine.createSpyObj({
    add: createObservable(undefined)
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseAddPageComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: CourseService, useValue: courseServiceSpy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('should create new course without id', () => {
      expect(component.course.id).not.toBeTruthy();
    });
  });

  describe('add', () => {
    let router: Router;

    beforeEach(() => {
      router = TestBed.get(Router);
      router.navigateByUrl = jasmine.createSpy();
      component.add(undefined);
    });

    it('should invoke service add method', () => {
      expect(courseServiceSpy.add).toHaveBeenCalledWith(undefined);
    });

    it('should navigate to courses', () => {
      expect(router.navigateByUrl).toHaveBeenCalledWith('/courses');
    });

  });
});
