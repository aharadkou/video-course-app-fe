import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormComponent } from './course-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CourseFormComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFormComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

});
