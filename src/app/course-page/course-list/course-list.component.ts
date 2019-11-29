import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { courses } from '../courses';
import { CommunicatorService } from 'src/app/core/services/communicator-service';
import { Subscription } from 'rxjs';
import { CourseFindPipe } from 'src/app/core/pipes/course-find.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [CourseFindPipe]
})
export class CourseListComponent implements OnInit, OnDestroy {

  courses: Course[];

  private sub: Subscription;

  constructor(private communicatorService: CommunicatorService, private findPipe: CourseFindPipe) { }

  ngOnInit() {
    this.courses = courses;
    this.sub = this.communicatorService.channel$.subscribe(
      searchValue => this.courses = this.findPipe.transform(this.courses, searchValue)
    );
  }

  delete(id: number) {
    this.courses = this.courses.filter((course: Course) => course.id !== id);
  }

  loadMore() {
    console.log('Loaded more courses');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
