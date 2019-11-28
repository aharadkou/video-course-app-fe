import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseControlsComponent } from './course-controls.component';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';

describe('CourseControlsComponent', () => {
  let component: CourseControlsComponent;
  let fixture: ComponentFixture<CourseControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseControlsComponent ],
      imports: [ FormsModule, IconsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
