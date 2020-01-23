import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDeleteModalComponent } from './course-delete-modal.component';
import { By } from '@angular/platform-browser';
import { TestModalComponent } from 'src/app/test/test-modal.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { deleteById } from 'src/app/store/actions/course.actions';

describe('CourseDeleteModalComponent', () => {
  let component: CourseDeleteModalComponent;
  let fixture: ComponentFixture<CourseDeleteModalComponent>;
  let store: MockStore<AppState>;
  const deletedId = 1;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDeleteModalComponent, TestModalComponent],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDeleteModalComponent);
    component = fixture.componentInstance;
    component.id = 'test';
    component.modal.args[0] = deletedId;
    store = TestBed.get(Store);
    store.dispatch = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should dispatch deleteById action', () => {
    const yesButtonEl = fixture.debugElement.query(By.css('.yes-button'));
    yesButtonEl.triggerEventHandler('click', null);
    expect(store.dispatch).toHaveBeenCalledWith(deleteById({ id: deletedId }));
  });
});
