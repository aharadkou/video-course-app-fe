import { Component, OnInit, Input, Host } from '@angular/core';
import { CourseFormComponent } from '../course-form/course-form.component';

@Component({
  selector: 'app-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.css']
})
export class CourseDateInputComponent implements OnInit {

  @Input() date: Date;

  constructor(@Host() couseForm: CourseFormComponent) { }

  ngOnInit() {
  }

}
