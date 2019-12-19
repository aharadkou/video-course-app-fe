import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/core/entities/course/course.model';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.css']
})
export class CourseEditPageComponent implements OnInit {

  course: Course;

  constructor(private courseService: CourseService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.courseService.getById(+params.get('courseId')).subscribe(
          course => this.course = course
        );
    });
  }

  update(course: Course) {
    this.courseService.update(course).subscribe(() => this.router.navigateByUrl('/courses'));
  }

}
