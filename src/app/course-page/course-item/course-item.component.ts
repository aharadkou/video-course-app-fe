import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { AppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { openDeleteModal } from 'src/app/store/actions/course.actions';
import { selectCurrentLang } from 'src/app/store/selectors/lang.selectors';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {

  @Input() course: Course;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  currentLang = this.store.pipe(select(selectCurrentLang));
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
    this.store.dispatch(openDeleteModal({ id: this.course.id }));
  }

}
