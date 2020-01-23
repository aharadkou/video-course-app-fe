import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseControlsComponent } from './course-controls.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import { selectErrorMessage } from 'src/app/store/selectors/course.selectors';

describe('CourseControlsComponent', () => {
  let component: CourseControlsComponent;
  let fixture: ComponentFixture<CourseControlsComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseControlsComponent],
      imports: [FormsModule, IconsModule, RouterTestingModule, ReactiveFormsModule],
      providers: [provideMockStore()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseControlsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.overrideSelector(selectErrorMessage, '');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
