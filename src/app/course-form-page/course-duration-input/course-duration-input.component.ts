import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-duration-input',
  templateUrl: './course-duration-input.component.html',
  styleUrls: ['./course-duration-input.component.css']
})
export class CourseDurationInputComponent implements OnInit {

  @Input() duration: number;

  constructor() { }

  ngOnInit() {
  }

}
