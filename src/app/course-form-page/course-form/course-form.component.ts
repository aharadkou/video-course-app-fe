import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { COURSE_TITLE_MAX_LENGTH, COURSE_DESCRIPTION_MAX_LENGTH } from 'src/app/core/constants/constants';
import { dateToString, stringToDate } from 'src/app/core/utils/date-format-utils';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  @Input() course: Course;
  @Output() save: EventEmitter<Course> = new EventEmitter<Course>();
  courseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.course);
    this.courseForm = this.formBuilder.group({
      title: [this.course.title, [Validators.required, Validators.maxLength(COURSE_TITLE_MAX_LENGTH)]],
      description: [this.course.description, [Validators.maxLength(COURSE_DESCRIPTION_MAX_LENGTH)]],
      creationDate: [dateToString(this.course.creationDate)],
      duration: [this.course.duration],
      authors: [this.course.authors]
    });
  }

  saveCourse() {
    const formValue = this.courseForm.value;
    const savedCourse: Course = {
      ...formValue,
      id: this.course.id,
      creationDate: stringToDate(formValue.creationDate),
      duration: +formValue.duration
    };
    this.save.emit(savedCourse as Course);
  }

  get creationDate() {
    return this.courseForm.get('creationDate');
  }

  get duration() {
    return this.courseForm.get('duration');
  }
}
