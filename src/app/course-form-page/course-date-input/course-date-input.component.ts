import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.css']
})
export class CourseDateInputComponent implements OnInit {

  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }

}
