import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { Course } from 'src/app/core/entities/course/course.model';
import { CourseImpl } from 'src/app/core/entities/course/impl/course-impl.model';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { mockPipe, mockDirective } from 'src/app/test/test-helpers';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import { openDeleteModal } from 'src/app/store/actions/course.actions';


function testCourseInfo(fixture: ComponentFixture<any>) {
  const descriptionEl = fixture.debugElement.query(By.css('.description')).nativeElement;
  expect(descriptionEl.textContent).toEqual(mockCourse.description);
}

const mockCourse = new CourseImpl(1, 'expTitle', new Date(), 111, 'expDescription', true);
@Component({
  template: `
    <app-course-item [course]="course" (delete)="delete($event)">
    </app-course-item>`
})
class TestHostComponent {
  course: Course = mockCourse;
  delete(id: number) {
  }
}

const mocks = [
  mockPipe({name: 'courseDuration'}),
  mockDirective({
    selector: '[appCourseFreshness]',
    inputs: ['appCourseFreshness']
  })
];

describe('CourseItemComponent with host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemComponent,
        TestHostComponent,
        ...mocks
      ],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    testHost.delete = jasmine.createSpy();
    store = TestBed.get(Store);
    store.dispatch = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should display course info', () => {
    testCourseInfo(fixture);
  });

  it('should dispatch openDeleteModal action delete button pressed', () => {
    const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
    deleteButton.triggerEventHandler('click', null);
    expect(store.dispatch).toHaveBeenCalledWith(openDeleteModal({ id: mockCourse.id }));
  });
});


describe('CourseItemComponent as stand alone', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, ...mocks],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
      providers: [provideMockStore()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should display course info', () => {
    testCourseInfo(fixture);
  });

});

