import { Component, OnInit, Input, Output } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/core/services/course.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  @Output() save = new EventEmitter();

  course: Course;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('courseId')) {
        this.courseService.getById(+params.get('courseId')).subscribe(
          course => this.course = course
        );
      }
    });
  }
}
