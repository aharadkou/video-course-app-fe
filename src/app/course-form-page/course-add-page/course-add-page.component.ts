import { Component, OnInit, Input, Output } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { CourseImpl } from 'src/app/core/entities/course/impl/course-impl.model';
import { CourseService } from 'src/app/core/services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.css']
})
export class CourseAddPageComponent implements OnInit {

  course: Course;

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.course = new CourseImpl(undefined, '', new Date(), 0, '', false);
  }

  add(course: Course) {
    this.courseService.add(course).subscribe(() => this.router.navigateByUrl('/courses'));
  }

}
