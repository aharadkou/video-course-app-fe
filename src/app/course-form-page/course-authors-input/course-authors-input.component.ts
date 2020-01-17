import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { Author } from 'src/app/core/entities/user/impl/author.model';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-course-authors-input',
  templateUrl: './course-authors-input.component.html',
  styleUrls: ['./course-authors-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CourseAuthorsInputComponent,
      multi: true
    }
  ]
})
export class CourseAuthorsInputComponent implements OnInit, ControlValueAccessor {

  constructor(private authorService: AuthorService, private elementRef: ElementRef) { }

  allAuthors: Author[];

  selectedAuthors: number[];

  private queryAuthorsList(): any {
    return this.elementRef.nativeElement.querySelector('.authors-list');
  }

  get allAuthorsExceptSelected() {
    return this.allAuthors.filter(authors => !this.selectedAuthors.find(authorId => authorId === +authors.id));
  }

  ngOnInit() {
    this.authorService.getAll().subscribe(
      authors => this.allAuthors = authors
    );
  }

  writeValue(selectedAuthors: number[]): void {
    this.selectedAuthors = selectedAuthors;
    this.onChange(selectedAuthors);
  }

  onChange = (selectedAuthors: number[]) => { };
  onTouch = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  getAuthorById(id: number) {
    return this.allAuthors.find(author => +author.id === id);
  }

  removeAuthor(id: number) {
    this.writeValue(this.selectedAuthors.filter(authorId => authorId !== id));
  }

  selectAuthor(author: Author) {
    this.writeValue(this.selectedAuthors.concat(+author.id));
  }

  toggleAuthorsHidden() {
    this.queryAuthorsList().classList.toggle('hidden');
  }

  addAuthorsHidden() {
    if (!this.queryAuthorsList().classList.contains('hidden')) {
      this.toggleAuthorsHidden();
    }
  }

  @HostListener('document:click', ['$event'])
  closeAuthorsDropdown(event: any) {
    if (this.queryAuthorsList() && !event.target.matches('.input-container')) {
      this.addAuthorsHidden();
    }
  }

}
