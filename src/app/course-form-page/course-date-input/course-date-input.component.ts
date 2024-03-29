import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';
import { PATTERN_DATE } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CourseDateInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CourseDateInputComponent,
      multi: true
    }
  ]
})
export class CourseDateInputComponent implements OnInit, ControlValueAccessor {

  date: string;

  constructor() { }

  ngOnInit() {
  }

  validate({ value }: FormControl): ValidationErrors {
    if (!(value && value.match(PATTERN_DATE))) {
      return {
        invalidDate: { value }
      };
    }
  }

  writeValue(value: string) {
    this.date = value;
  }

  updateValue(value: string) {
    this.date = value;
    this.onChange(value);
  }

  onChange(value: string) { }

  onTouched() { }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

}
