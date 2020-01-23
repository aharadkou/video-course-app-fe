import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { mockPipe } from 'src/app/test/test-helpers';
import { Course } from 'src/app/core/entities/course/course.model';
import { CourseImpl } from 'src/app/core/entities/course/impl/course-impl.model';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/states/app.state';
import { selectLoaded, selectCanLoadMore, selectIsEmpty } from 'src/app/store/selectors/course.selectors';
import { MemoizedSelector, Store } from '@ngrx/store';
import { loadNextPage } from 'src/app/store/actions/course.actions';


describe('CourseListComponent', () => {

  const mockCourses: Course[]  = [
    new CourseImpl(1, 'Course 1', new Date(), 55, 'descr1', true),
    new CourseImpl(2, 'Course 2', new Date(), 75, 'descr2', false),
    new CourseImpl(3, 'Course 3', new Date(), 135, 'descr3', true),
  ];
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore<AppState>;
  let mockIsEmptySelector: MemoizedSelector<AppState, boolean>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseListComponent,
        mockPipe({name: 'coursesOrderBy'}, () => mockCourses)
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.overrideSelector(selectLoaded, mockCourses);
    store.overrideSelector(selectCanLoadMore, true);
    store.dispatch = jasmine.createSpy();
    mockIsEmptySelector = store.overrideSelector(selectIsEmpty, false);
    fixture.detectChanges();
  });

  it('should create child component for each courses list element', () => {
    const childInstancesCount = fixture.debugElement.queryAll(By.css('app-course-item')).length;
    expect(childInstancesCount).toBe(mockCourses.length);
  });

  it('should display message if there are no courses', () => {
    mockIsEmptySelector.setResult(true);
    store.refreshState();
    fixture.detectChanges();
    const headerEl = fixture.debugElement.query(By.css('.no-items-title')).nativeElement;
    expect(headerEl).toBeDefined();
  });

  describe('ngOnInit', () => {
    it('should dispatch loadNextPage action if store is empty', () => {
      mockIsEmptySelector.setResult(true);
      store.refreshState();
      fixture.detectChanges();
      component.ngOnInit();
      expect(store.dispatch).toHaveBeenCalledWith(loadNextPage());
    });
    it('shouldnt dispatch loadNextPage action if store isnt empty', () => {
      mockIsEmptySelector.setResult(false);
      store.refreshState();
      fixture.detectChanges();
      component.ngOnInit();
      expect(store.dispatch).not.toHaveBeenCalledWith(loadNextPage());
    });
  });

  describe('loadMore', () => {
    it('should dispatch loadMore action', () => {
      fixture.debugElement.query(By.css('.load-more-button')).triggerEventHandler('click', null);
      expect(store.dispatch).toHaveBeenCalledWith(loadNextPage());
    });
  });

});
