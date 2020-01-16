import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { PATTERN_DATE } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.css']
})
export class CourseDateInputComponent implements OnInit, ControlValueAccessor {

  date: Date;

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: Date): void {
    console.log('Writed' + value);
    this.date = value;
  }

  validate(control: FormControl) {
    const value = control.value as string;
    if (value.match(PATTERN_DATE)) {
      return null;
    } else {
      return {
        invalidDate: { value }
      };
    }
  }

  onChange = (value: string) => {
    console.log('Changed' + value);
     const [, day, month, year] = value.match(PATTERN_DATE);
     this.date = new Date(+year, +month, +day);
  }

  onTouched = () => {

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
