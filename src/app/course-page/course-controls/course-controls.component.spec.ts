import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CourseControlsComponent } from './course-controls.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('CourseControlsComponent', () => {
  let component: CourseControlsComponent;
  let fixture: ComponentFixture<CourseControlsComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseControlsComponent],
      imports: [FormsModule, IconsModule, RouterTestingModule, ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseControlsComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    router.navigateByUrl = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should navigate to new coure page after Course add button clicked', () => {
    const courseAddButton = fixture.debugElement.query(By.css('.course-add-button'));
    courseAddButton.triggerEventHandler('click', null);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/courses/new');
  });
});
