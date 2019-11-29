import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { async } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { PageTitleDirective } from './page-title.directive';

const expectedTitle = "expTitle";
@Component({
  template: `<span appPageTitle pageTitle=${expectedTitle}></span>`
})
class TestHostComponent{ }
describe('PageTitleDirective', () => {

  beforeEach(async(() => {
    const spyTitle = jasmine.createSpyObj('Title', [ 'setTitle' ]);
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, PageTitleDirective ],
      providers: [{ provide: Title, useValue: spyTitle }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should change title', () => {
    expect(TestBed.get(Title).setTitle).toHaveBeenCalledWith(expectedTitle);
  });
});
