import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { Course } from 'src/app/core/entities/course/course.model';
import { CourseImpl } from 'src/app/core/entities/course/impl/course-impl.model';
import { Component, Pipe, PipeTransform, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { mockPipe, mockDirective } from 'src/app/test/test-helpers';
import { ModalService } from 'src/app/core/services/modal.service';


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
  const modalServiceSpy: Partial<ModalService> = jasmine.createSpyObj([ 'open' ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemComponent,
        TestHostComponent,
        ...mocks
      ],
      imports: [ IconsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ {provide: ModalService, useValue: modalServiceSpy} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    testHost.delete = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should display course info', () => {
    testCourseInfo(fixture);
  });

  it('should open modal when delete button pressed', () => {
    const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
    deleteButton.triggerEventHandler('click', null);
    expect( modalServiceSpy.open).toHaveBeenCalled();
  });
});


describe('CourseItemComponent as stand alone', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, ...mocks],
      imports: [ IconsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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

