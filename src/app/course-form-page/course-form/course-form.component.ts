import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { FormGroup, FormBuilder, Validators, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { COURSE_TITLE_MAX_LENGTH, COURSE_DESCRIPTION_MAX_LENGTH } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CourseFormComponent,
      multi: true
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CourseFormComponent,
      multi: true
    }
  ]
})
export class CourseFormComponent implements OnInit {

  @Input() course: Course;
  @Output() save: EventEmitter<Course> = new EventEmitter<Course>();
  courseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      title: [this.course.title, [Validators.required, Validators.maxLength(COURSE_TITLE_MAX_LENGTH)]],
      description: [this.course.description, [Validators.maxLength(COURSE_DESCRIPTION_MAX_LENGTH)]],
      creationDate: [this.course.creationDate],
      duration: [this.course.duration],
      authors: [this.course.authors]
    });
  }

  saveCourse() {
    const savedCourse = this.courseForm.value as Course;
    this.save.emit(savedCourse);
  }

  get creationDate() {
    return this.courseForm.get('creationDate');
  }
}
