import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { AppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import { deleteById } from 'src/app/store/actions/course.actions';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {

  @Input() course: Course;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  courseItemClass;
  starClass;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.courseItemClass = {
      'course-item shadow': true,
      'course-item-top-rated': this.course.topRated
    };
    this.starClass = {
      'star-icon': true,
      hidden: !this.course.topRated
    };
  }

  openDeleteModal() {
    this.store.dispatch(deleteById({ id: this.course.id }));
  }

}
