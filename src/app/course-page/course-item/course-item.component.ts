import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/course-page/entities/course/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() private course: Course;
  @Output() private onDelete : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
