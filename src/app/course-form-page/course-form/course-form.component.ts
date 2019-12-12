import { Component, OnInit, Input, Output } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course.service';
import { EventEmitter } from 'events';
import { CourseImpl } from 'src/app/core/entities/course/impl/course-impl.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  course: Course;

  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('courseId')) {
        this.courseService.getById(+params.get('courseId')).subscribe(
          course => this.course = course
        );
      } else {
        this.course = new CourseImpl(undefined, '', new Date(), 0, '', false);
      }
    });
  }

  save() {
    // not working properly now because of:
    // - one-way binding
    // - course-list component isn't notified about additon/edition of single course
    const saveCallback = () => this.router.navigateByUrl('/courses');
    if (this.course.id) {
      this.courseService.update(this.course).subscribe(saveCallback);
    } else {
      this.courseService.add(this.course).subscribe(saveCallback);
    }
  }
}
