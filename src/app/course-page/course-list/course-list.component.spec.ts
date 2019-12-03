import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { mockPipe } from 'src/app/test/test-helpers';
import { courses } from '../courses';


describe('CourseListComponent', () => {
  const mockCourses = courses.slice();
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseListComponent,
        mockPipe({name: 'coursesOrderBy'}, () => mockCourses)
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create child component for each courses list element', () => {
    const childInstancesCount = fixture.debugElement.queryAll(By.css('app-course-item')).length;
    expect(component.courses.length).toBe(childInstancesCount);
  });

  it('should display message if there are no courses', () => {
    component.courses = [];
    fixture.detectChanges();
    const headerEl = fixture.debugElement.query(By.css('.no-items-title')).nativeElement;
    expect(headerEl).toBeDefined();
    component.courses = mockCourses;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('should init courses list', () => {
      expect(component.courses).toBeTruthy();
    });
  });

  describe('delete', () => {
    it('should delete element with passed id', () => {
      const deletedId = 1;
      component.delete(deletedId);
      expect(component.courses.find((course) => course.id === deletedId)).not.toBeTruthy();
    });
  });

});
