import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditPageComponent } from './course-edit-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseImpl } from 'src/app/core/entities/course/impl/course-impl.model';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import { selectUpdated } from 'src/app/store/selectors/course.selectors';
import { updateComplete } from 'src/app/store/actions/course.actions';

const mockCourse = new CourseImpl(1, 'title', new Date(), 10, '', false);

describe('CourseEditPageComponent', () => {
  let component: CourseEditPageComponent;
  let fixture: ComponentFixture<CourseEditPageComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseEditPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
      providers: [provideMockStore()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.dispatch = jasmine.createSpy();
    store.overrideSelector(selectUpdated, mockCourse);
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('should get course from store', () => {
      expect(component.course.id).toBe(mockCourse.id);
    });
  });

  describe('update', () => {
    it('should dispatch update action', () => {
      component.update(mockCourse);
      expect(store.dispatch).toHaveBeenCalledWith(updateComplete({ course: mockCourse }));
    });
  });

});
