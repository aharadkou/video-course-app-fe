import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAuthorsInputComponent } from './course-authors-input.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import { selectFiltered, selectFirstFiltered } from 'src/app/store/selectors/author.selectors';

describe('CourseAuthorsInputComponent', () => {
  let component: CourseAuthorsInputComponent;
  let fixture: ComponentFixture<CourseAuthorsInputComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseAuthorsInputComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule],
      providers: [provideMockStore()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAuthorsInputComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.overrideSelector(selectFiltered, []);
    store.overrideSelector(selectFirstFiltered, null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
