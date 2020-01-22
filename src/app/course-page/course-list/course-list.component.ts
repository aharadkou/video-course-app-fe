import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { selectLoaded, selectCanLoadMore, selectIsEmpty } from 'src/app/store/selectors/course.selectors';
import { loadNextPage } from 'src/app/store/actions/course.actions';
import { take } from 'rxjs/operators';
import { TAKE_FIRST } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses = this.store.pipe(select(selectLoaded));

  canLoadMore = this.store.pipe(select(selectCanLoadMore));

  isEmpty = this.store.pipe(select(selectIsEmpty));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isEmpty.pipe(take(TAKE_FIRST)).subscribe(
      isEmpty => {
        if (isEmpty) {
          this.store.dispatch(loadNextPage());
        }
      }
    );
  }

  loadMore() {
    this.store.dispatch(loadNextPage());
  }

}
