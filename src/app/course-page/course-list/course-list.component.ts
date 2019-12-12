import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { CourseService } from 'src/app/core/services/course.service';
import { CommunicatorService } from 'src/app/core/services/communicator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {

  courses: Course[];
  private sub: Subscription;

  constructor(private courseService: CourseService, private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.fetchData();
    this.sub = this.communicatorService.channel$.subscribe(id => this.delete(id));
  }

  private fetchData() {
    this.courseService.getAll().subscribe(courses => this.courses = courses);
  }

  delete(id: number) {
    this.courseService.delete(id).subscribe(
      {
        next: (_: any) => this.courses = this.courses.filter(course => course.id !== id),
        error: (error: Error) => console.log(error)
      }
    );
  }

  loadMore() {
    console.log('Loaded more courses');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
