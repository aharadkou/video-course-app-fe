import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter} from 'rxjs/operators';
import { DEBOUNCE_SEARCH, SEARCH_SKIP_COUNT } from 'src/app/core/constants/constants';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { find } from 'src/app/store/actions/course.actions';
import { selectErrorMessage } from 'src/app/store/selectors/course.selectors';

@Component({
  selector: 'app-course-controls',
  templateUrl: './course-controls.component.html',
  styleUrls: ['./course-controls.component.css']
})
export class CourseControlsComponent implements OnInit, OnDestroy {

  private searchSub: Subscription;
  searchControl: FormControl;
  errorMessage = this.store.pipe(select(selectErrorMessage));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.searchControl = new FormControl('');
    this.searchSub = this.searchControl.valueChanges.pipe(
      debounceTime(DEBOUNCE_SEARCH),
      filter((searchValue: string) => {
        const searchLength = searchValue.trim().length;
        return searchLength >= SEARCH_SKIP_COUNT || searchLength === 0;
      })
    ).subscribe(
      searchValue => this.store.dispatch(find({ filter: searchValue }))
    );
  }

  ngOnDestroy() {
    this.searchSub.unsubscribe();
  }

}
