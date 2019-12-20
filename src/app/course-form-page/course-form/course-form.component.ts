import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  @Input() course: Course;
  @Output() save: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() { }

  saveCourse() {
    this.save.emit(this.course);
  }
}
