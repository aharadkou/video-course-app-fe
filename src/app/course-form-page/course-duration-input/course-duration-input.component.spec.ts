import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDurationInputComponent } from './course-duration-input.component';
import { FormsModule } from '@angular/forms';
import { mockPipe } from 'src/app/test/test-helpers';

describe('CourseDurationInputComponent', () => {
  let component: CourseDurationInputComponent;
  let fixture: ComponentFixture<CourseDurationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDurationInputComponent, mockPipe({ name: 'courseDuration' }) ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDurationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
