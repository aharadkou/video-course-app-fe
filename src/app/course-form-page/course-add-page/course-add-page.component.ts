import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { CourseImpl } from 'src/app/core/entities/course/impl/course-impl.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { add } from 'src/app/store/actions/course.actions';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.css']
})
export class CourseAddPageComponent implements OnInit {

  course = new CourseImpl(undefined, '', new Date(), undefined, '', false);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  add(course: Course) {
    this.store.dispatch(add({ course }));
  }

}
