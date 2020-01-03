import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDeleteModalComponent } from './course-delete-modal.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ModalService } from 'src/app/core/services/modal.service';
import { CommunicatorService } from 'src/app/core/services/communicator.service';
import { TestModalComponent } from 'src/app/test/test-modal.component';


describe('CourseDeleteModalComponent', () => {
  let component: CourseDeleteModalComponent;
  let fixture: ComponentFixture<CourseDeleteModalComponent>;
  const modalServiceSpy: Partial<ModalService> = jasmine.createSpyObj(['close']);
  const communicatorServiceSpy: Partial<CommunicatorService> = jasmine.createSpyObj(['publishData']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDeleteModalComponent, TestModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ModalService, useValue: modalServiceSpy },
        { provide: CommunicatorService, useValue: communicatorServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDeleteModalComponent);
    const modal = TestBed.createComponent(TestModalComponent).componentInstance;
    modal.args.push(1);
    component = fixture.componentInstance;
    component.id = 'test';
    fixture.detectChanges();
  });

  it('should should publish data and close modal when Yes button pressed', () => {
    const yesButtonEl = fixture.debugElement.query(By.css('.yes-button'));
    yesButtonEl.triggerEventHandler('click', null);
    expect(modalServiceSpy.close).toHaveBeenCalledWith(component.id);
    expect(communicatorServiceSpy.publishData).toHaveBeenCalledWith('courseDelete', component.modal.args[0]);
  });
});
