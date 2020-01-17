import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { AppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { selectUpdated } from 'src/app/store/selectors/course.selectors';
import { update, updateComplete } from 'src/app/store/actions/course.actions';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.css']
})
export class CourseEditPageComponent implements OnInit {

  course: Course;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(update());
    this.store.pipe(select(selectUpdated)).subscribe(
      course => this.course = course
    );
  }

  update(course: Course) {
    this.store.dispatch(updateComplete({ course }));
  }

}
