import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() course: Course;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  courseItemClass;
  starClass;

  constructor() { }

  ngOnInit() {
    this.courseItemClass = {
      'course-item shadow': true,
      'course-item-top-rated': this.course.topRated
    };
    this.starClass = {
      'star-icon': true,
      hidden: !this.course.topRated
    };
  }

}
