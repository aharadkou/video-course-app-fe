import { CourseFreshnessDirective } from './course-freshness.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';


const freshDate = (() => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 5);
  return currentDate;
})();

const futureDate = (() => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 5);
  return currentDate;
})();

@Component({
  template: `
  <h3 [appCourseFreshness]="freshDate" id="expFreshDate"></h3>
  <h3 [appCourseFreshness]="futureDate" id="expUpcomingDate"></h3>
  <h3 [appCourseFreshness]="notFreshDate" id="expOldDate"></h3>`
})
class TestHostComponent {

  notFreshDate = (() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 15);
    return currentDate;
  })();

  freshDate = (() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 5);
    return currentDate;
  })();

  futureDate = (() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    return currentDate;
  })();
}
describe('CourseFreshnessDirective', () => {

  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ CourseFreshnessDirective, TestHostComponent ]
    })
    .createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  function getHeaderClasses(headerId: string): any {
    const headerEl = fixture.debugElement.query(By.css(headerId)).nativeElement;
    return headerEl.classList;
  }

  it('should add course-item-fresh class on host', () => {
    expect(getHeaderClasses('#expFreshDate').contains('course-item-fresh')).toBeTruthy();
  });

  it('should add course-item-upcoming class on host', () => {
    expect(getHeaderClasses('#expUpcomingDate').contains('course-item-upcoming')).toBeTruthy();
  });

  it('shouldnt add any class on host', () => {
    expect(getHeaderClasses('#expOldDate').length).toBe(0);
  });
});
