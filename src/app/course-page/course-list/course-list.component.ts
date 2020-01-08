import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { selectLoaded, selectCanLoadMore, selectIsEmpty } from 'src/app/store/selectors/course.selectors';
import { loadMore, loadPaged } from 'src/app/store/actions/course.actions';

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
    this.store.dispatch(loadPaged());
  }

  loadMore() {
    this.store.dispatch(loadMore());
  }

}
