import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddPageComponent } from './course-add-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import { add } from 'src/app/store/actions/course.actions';

describe('CourseAddPageComponent', () => {
  let component: CourseAddPageComponent;
  let fixture: ComponentFixture<CourseAddPageComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseAddPageComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.dispatch = jasmine.createSpy();
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('should create new course without id', () => {
      expect(component.course.id).not.toBeTruthy();
    });
  });

  describe('add', () => {
    it('should dispatch add action', () => {
      component.add(undefined);
      expect(store.dispatch).toHaveBeenCalledWith(add({ course: undefined }));
    });
  });
});
