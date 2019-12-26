import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CourseControlsComponent } from './course-controls.component';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CommunicatorService } from 'src/app/core/services/communicator.service';

describe('CourseControlsComponent', () => {
  let component: CourseControlsComponent;
  let fixture: ComponentFixture<CourseControlsComponent>;
  let router: Router;
  const communicatorServiceSpy: Partial<CommunicatorService> = jasmine.createSpyObj([ 'publishData' ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseControlsComponent ],
      imports: [ FormsModule, IconsModule, RouterTestingModule ],
      providers: [ { provide: CommunicatorService, useValue: communicatorServiceSpy } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseControlsComponent);
    component = fixture.componentInstance;
    console.log = jasmine.createSpy();
    router = TestBed.get(Router);
    router.navigateByUrl = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should publish input value after Search button clicked', fakeAsync(() => {
    const expectedValue = 'texxxt';
    const searchInputEl = fixture.debugElement.query(By.css('.search-input')).nativeElement;
    searchInputEl.value = expectedValue;
    searchInputEl.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();
    const searchButton = fixture.debugElement.query(By.css('.search-button'));
    searchButton.triggerEventHandler('click', null);
    expect(communicatorServiceSpy.publishData).toHaveBeenCalledWith('courseFind', expectedValue);
  }));

  it('should navigate to new coure page after Course add button clicked', () => {
    const courseAddButton = fixture.debugElement.query(By.css('.course-add-button'));
    courseAddButton.triggerEventHandler('click', null);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/courses/new');
  });
});
