import { Component, OnInit, Input, Host, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-duration-input',
  templateUrl: './course-duration-input.component.html',
  styleUrls: ['./course-duration-input.component.css']
})
export class CourseDurationInputComponent implements OnInit {

  @Input() duration: number;
  @Output() durationChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
