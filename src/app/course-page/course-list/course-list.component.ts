import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { CommunicatorService } from 'src/app/core/services/communicator.service';
import { Subscription } from 'rxjs';
import { CourseFindPipe } from 'src/app/core/pipes/course-find.pipe';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [CourseFindPipe]
})
export class CourseListComponent implements OnInit, OnDestroy {

  courses: Course[];

  private sub: Subscription;

  constructor(
    private communicatorService: CommunicatorService,
    private findPipe: CourseFindPipe,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.fetchData();
    this.sub = this.communicatorService.channel$.subscribe(
      searchValue => {
        this.fetchData();
        this.courses = this.findPipe.transform(this.courses, searchValue);
      }
    );
  }

  fetchData() {
    this.courseService.getAll().subscribe(courses => this.courses = courses);
  }

  delete(id: number) {
    const deleteConfirmed = confirm('Do you really want to delete this course?');
    if (deleteConfirmed) {
      this.courseService.delete(id);
      this.fetchData();
    }
  }

  loadMore() {
    console.log('Loaded more courses');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
