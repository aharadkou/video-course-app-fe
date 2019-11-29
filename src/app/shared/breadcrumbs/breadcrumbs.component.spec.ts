import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';


const expectedText = 'wwwfff';

@Component({
  template: `<app-breadcrumbs>${expectedText}</app-breadcrumbs>`
})
class TestHostComponent{ }

describe('BreadcrumbsComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display passed as <ng-content> text', () => {
    let titleEl = fixture.debugElement.query(By.css('.breadcrumbs-title')).nativeElement;
    expect(titleEl.textContent).toBe(expectedText);
  });
});
