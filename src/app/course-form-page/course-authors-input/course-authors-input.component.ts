import { Component, OnInit, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';
import { COURSE_AUTHORS_MIN, DEBOUNCE_SEARCH, TAKE_FIRST } from 'src/app/core/constants/constants';
import { Author } from 'src/app/core/entities/course/author.model';
import { AppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { selectFirstFiltered, selectFiltered } from 'src/app/store/selectors/author.selectors';
import { debounceTime, filter, take } from 'rxjs/operators';
import { loadFiltered, clearFiltered } from 'src/app/store/actions/author.actions';

@Component({
  selector: 'app-course-authors-input',
  templateUrl: './course-authors-input.component.html',
  styleUrls: ['./course-authors-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CourseAuthorsInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CourseAuthorsInputComponent,
      multi: true
    }
  ]
})
export class CourseAuthorsInputComponent implements OnInit, ControlValueAccessor {

  constructor(private store: Store<AppState>, private elementRef: ElementRef) { }

  filterControl: FormControl;

  selectedAuthors: Author[];

  suitableAuthors = this.store.pipe(select(selectFiltered));

  addFirstSuitable(event: any) {
    this.store.pipe(select(selectFirstFiltered), take(TAKE_FIRST)).subscribe(
      firstFiltered => {
        if (firstFiltered) {
          this.selectAuthor(firstFiltered);
        }
      }
    );
    event.preventDefault();
  }

  removeLastSelected() {
    if (!this.filterControl.value && this.selectedAuthors && this.selectedAuthors.length > 0) {
      const selectedWithoutLast = this.selectedAuthors.slice();
      selectedWithoutLast.pop();
      this.selectedAuthors = selectedWithoutLast;
      this.updateValue(this.selectedAuthors);
    }
  }

  ngOnInit() {
    this.filterControl = new FormControl('');
    this.filterControl.valueChanges.pipe(
      filter((filterValue: string) => {
        const isBlank = filterValue.trim().length === 0;
        if (isBlank) {
          this.store.dispatch(clearFiltered());
        }
        return !isBlank;
      }),
      debounceTime(DEBOUNCE_SEARCH)
    ).subscribe(
      (filterValue: string) => this.store.dispatch(
        loadFiltered({ filter: filterValue, selectedIds: this.selectedAuthors.map(author => author.id) })
      )
    );
  }

  validate({ value }: FormControl): ValidationErrors {
    if (this.selectedAuthors.length < COURSE_AUTHORS_MIN) {
      return {
        minAuthors: { value }
      };
    }
  }

  setFocusOnInput() {
    this.elementRef.nativeElement.querySelector('.filter-input').focus();
  }

  writeValue(selectedAuthors: Author[]) {
    this.selectedAuthors = selectedAuthors;
  }

  updateValue(selectedAuthors: Author[]) {
    this.selectedAuthors = selectedAuthors;
    this.onChange(selectedAuthors);
  }

  onChange(selectedAuthors: Author[]) { }

  onTouched() { }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  removeAuthor(id: number) {
    this.updateValue(this.selectedAuthors.filter(author => author.id !== id));
  }

  selectAuthor(author: Author) {
    this.updateValue(this.selectedAuthors.concat(author));
    this.filterControl.setValue('');
  }

}
