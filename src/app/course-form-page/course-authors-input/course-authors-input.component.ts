import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';
import { Author } from 'src/app/core/entities/user/impl/author.model';
import { AuthorService } from 'src/app/core/services/author.service';
import { COURSE_AUTHORS_MIN } from 'src/app/core/constants/constants';

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

  constructor(private authorService: AuthorService, private elementRef: ElementRef) { }

  allAuthors: Author[];

  selectedAuthors: number[];

  private filter: string;

  private queryAuthorsList(): any {
    return this.elementRef.nativeElement.querySelector('.authors-list');
  }

  get suitableAuthors() {
    const authorNameToUpperCase = (author: Author) => (author.firstName + ' ' + author.lastName).toUpperCase();
    if (this.filter) {
      const upperCaseFilter = this.filter.toUpperCase();
      return this.allAuthors.filter(author =>
        !this.selectedAuthors.find(authorId => authorId === +author.id)
          && authorNameToUpperCase(author).includes(upperCaseFilter)
      ).sort(
        (author1: Author, author2: Author) =>
              authorNameToUpperCase(author1).indexOf(upperCaseFilter) - authorNameToUpperCase(author2).indexOf(upperCaseFilter));
    }
  }

  addFirstSuitable(event: any) {
    if (this.suitableAuthors && this.suitableAuthors[0]) {
      this.selectAuthor(this.suitableAuthors[0]);
    }
    event.preventDefault();
  }

  removeLastSelected() {
    if (!this.filter && this.selectedAuthors && this.selectedAuthors[0]) {
      const selectedWithoutLast = this.selectedAuthors.slice();
      selectedWithoutLast.pop();
      this.selectedAuthors = selectedWithoutLast;
      this.writeValue(this.selectedAuthors);
    }
  }

  ngOnInit() {
    this.authorService.getAll().subscribe(
      authors => this.allAuthors = authors
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

  writeValue(selectedAuthors: number[]): void {
    this.selectedAuthors = selectedAuthors;
    this.onChange(selectedAuthors);
  }

  onChange = (selectedAuthors: number[]) => { };
  onTouched = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  getAuthorById(id: number) {
    return this.allAuthors.find(author => +author.id === id);
  }

  removeAuthor(id: number) {
    this.writeValue(this.selectedAuthors.filter(authorId => authorId !== id));
  }

  selectAuthor(author: Author) {
    this.writeValue(this.selectedAuthors.concat(+author.id));
    this.filter = undefined;
  }

}
