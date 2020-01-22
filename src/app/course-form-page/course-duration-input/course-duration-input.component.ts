import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-course-duration-input',
  templateUrl: './course-duration-input.component.html',
  styleUrls: ['./course-duration-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CourseDurationInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CourseDurationInputComponent,
      multi: true
    }
  ]
})
export class CourseDurationInputComponent implements OnInit, ControlValueAccessor {

  duration: string;

  constructor() { }

  ngOnInit() {
  }

  validate({ value }: FormControl): ValidationErrors {
    const numberValue = +value;
    if (!Number.isInteger(numberValue) || numberValue <= 0) {
        return { invalidDuration: { value } };
    }
  }

  writeValue(value: string) {
    this.duration = value;
  }

  updateValue(value: string) {
    this.duration = value;
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
