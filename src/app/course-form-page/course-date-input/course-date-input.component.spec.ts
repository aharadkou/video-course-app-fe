import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDateInputComponent } from './course-date-input.component';
import { FormsModule } from '@angular/forms';

describe('CourseDateInputComponent', () => {
  let component: CourseDateInputComponent;
  let fixture: ComponentFixture<CourseDateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDateInputComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
