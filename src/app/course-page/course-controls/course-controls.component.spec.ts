import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CourseControlsComponent } from './course-controls.component';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('CourseControlsComponent', () => {
  let component: CourseControlsComponent;
  let fixture: ComponentFixture<CourseControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseControlsComponent ],
      imports: [ FormsModule, IconsModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseControlsComponent);
    component = fixture.componentInstance;
    console.log = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should log input value after Search button clicked', fakeAsync(() => {
    const expectedValue = 'texxxt';
    const searchInputEl = fixture.debugElement.query(By.css('.search-input')).nativeElement;
    searchInputEl.value = expectedValue;
    searchInputEl.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();
    const searchButton = fixture.debugElement.query(By.css('.search-button'));
    searchButton.triggerEventHandler('click', null);
    expect(console.log).toHaveBeenCalledWith(expectedValue);
  }));

  it('should log message after Course add button clicked', () => {
    const courseAddButton = fixture.debugElement.query(By.css('.course-add-button'));
    courseAddButton.triggerEventHandler('click', null);
    expect(console.log).toHaveBeenCalled();
  });
});
