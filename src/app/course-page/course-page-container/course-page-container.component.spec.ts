import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageContainerComponent } from './course-page-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CoursePageContainerComponent', () => {
  let component: CoursePageContainerComponent;
  let fixture: ComponentFixture<CoursePageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursePageContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
