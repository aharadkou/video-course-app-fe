import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.courseService.getAll().subscribe(courses => this.courses = courses);
  }

  delete(id: number) {
    const deleteConfirmed = confirm('Do you really want to delete this course?');
    if (deleteConfirmed) {
      this.courseService.delete(id).subscribe(
        {
          next: (result: any) => this.courses = this.courses.filter(course => course.id !== id),
          error: (error: Error) => console.log(error)
        }
      );
    }
  }

  loadMore() {
    console.log('Loaded more courses');
  }

}
