import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { Course } from 'src/app/core/entities/course/course.model';
import { CourseImpl } from 'src/app/core/entities/course/impl/course-impl.model';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { By } from '@angular/platform-browser';


function testCourseInfo(fixture: ComponentFixture<any>) {
  const titleEl = fixture.debugElement.query(By.css('.title')).nativeElement;
  const descriptionEl = fixture.debugElement.query(By.css('.description')).nativeElement;
  expect(titleEl.textContent).toEqual(mockCourse.title);
  expect(descriptionEl.textContent).toEqual(mockCourse.description);
}

@Pipe({
  name: 'courseDuration'
})
class TestPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
  }
}


const mockCourse = new CourseImpl(1, 'expTitle', new Date(), 111, 'expDescription');
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


describe('CourseItemComponent with host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, TestHostComponent, TestPipe ],
      imports: [ IconsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    testHost.delete = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should display course title and description', () => {
    testCourseInfo(fixture);
  });

  it('should raise delete on host', () => {
    const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
    deleteButton.triggerEventHandler('click', null);
    expect(testHost.delete).toHaveBeenCalled();
  });
});


describe('CourseItemComponent as stand alone', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, TestPipe ],
      imports: [ IconsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should display course title and description', () => {
    testCourseInfo(fixture);
  });

});

