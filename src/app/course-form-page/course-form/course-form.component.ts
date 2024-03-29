import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { COURSE_TITLE_MAX_LENGTH, COURSE_DESCRIPTION_MAX_LENGTH } from 'src/app/core/constants/constants';
import { dateToString, stringToDate } from 'src/app/core/utils/date-utils';
import { select, Store } from '@ngrx/store';
import { selectErrorMessage as selectCourseErrorMessage} from 'src/app/store/selectors/course.selectors';
import { selectErrorMessage as selectAuthorErrorMessage} from 'src/app/store/selectors/author.selectors';

import { AppState } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  @Input() course: Course;
  @Output() save: EventEmitter<Course> = new EventEmitter<Course>();
  courseForm: FormGroup;
  courseErrorMessage = this.store.pipe(select(selectCourseErrorMessage));
  authorErrorMessage = this.store.pipe(select(selectAuthorErrorMessage));

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      title: [this.course.title, [Validators.required, Validators.maxLength(COURSE_TITLE_MAX_LENGTH)]],
      description: [this.course.description, [Validators.required, Validators.maxLength(COURSE_DESCRIPTION_MAX_LENGTH)]],
      creationDate: [dateToString(this.course.creationDate), Validators.required],
      duration: [this.course.duration, Validators.required],
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

  get description() {
    return this.courseForm.get('description');
  }

  get title() {
    return this.courseForm.get('title');
  }

  get duration() {
    return this.courseForm.get('duration');
  }

  get authors() {
    return this.courseForm.get('authors');
  }

}
