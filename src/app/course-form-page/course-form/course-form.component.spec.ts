import { async, TestBed } from '@angular/core/testing';

import { CourseFormComponent } from './course-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import { selectErrorMessage as selectCourseErrorMessage} from 'src/app/store/selectors/course.selectors';
import { selectErrorMessage as selectAuthorErrorMessage} from 'src/app/store/selectors/author.selectors';

describe('CourseFormComponent', () => {
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()]
    })
    .compileComponents();
    store = TestBed.get(Store);
    store.overrideSelector(selectCourseErrorMessage, '');
    store.overrideSelector(selectAuthorErrorMessage, '');
  }));

});
