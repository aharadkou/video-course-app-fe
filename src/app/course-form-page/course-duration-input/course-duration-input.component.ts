import { Component, OnInit, Input, Host } from '@angular/core';
import { CourseFormComponent } from '../course-form/course-form.component';

@Component({
  selector: 'app-course-duration-input',
  templateUrl: './course-duration-input.component.html',
  styleUrls: ['./course-duration-input.component.css']
})
export class CourseDurationInputComponent implements OnInit {

  constructor(@Host() couseForm: CourseFormComponent) { }

  ngOnInit() {
  }

}
