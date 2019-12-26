import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { CourseService } from 'src/app/core/services/course.service';
import { CommunicatorService } from 'src/app/core/services/communicator.service';
import { Subscription } from 'rxjs';
import { COURSE_PAGE_ORDER, COURSE_LOAD_FROM, COURSE_PER_PAGE } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {

  private readonly coursePerPage = COURSE_PER_PAGE;

  private deleteSub: Subscription;
  private findSub: Subscription;
  private loadFrom = COURSE_LOAD_FROM;

  courses: Course[];
  totalCourses: number;
  searchValue = '';

  constructor(private courseService: CourseService, private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.courses = [];
    this.fetchData(this.loadFrom, this.coursePerPage);
    this.deleteSub = this.communicatorService.getData('courseDelete').subscribe(id => this.delete(id));
    this.findSub = this.communicatorService.getData('courseFind').subscribe(
      searchValue => {
        this.searchValue = searchValue;
        this.loadFrom = COURSE_LOAD_FROM;
        this.courses = [];
        this.fetchData(this.loadFrom, this.coursePerPage);
      }
    );
  }

  private fetchData(start: number, count: number) {
    this.courseService
      .getAll(start, count, COURSE_PAGE_ORDER, this.searchValue)
        .subscribe(
          {
            next: coursePagination => {
              this.courses = this.courses.concat(coursePagination.courses);
              this.totalCourses = coursePagination.total;
            },
            error: error => console.log(error)
          }
        );
  }

  delete(id: number) {
    this.courseService.deleteById(id).subscribe(
      {
        next: () => {
          const length = this.courses.length;
          this.courses = [];
          this.fetchData(COURSE_LOAD_FROM, length);
        },
        error: error => console.log(error)
      }
    );
  }

  loadMore() {
    this.loadFrom += this.coursePerPage;
    this.fetchData(this.loadFrom, this.coursePerPage);
  }

  canLoadMore(): boolean {
    return this.courses.length !== this.totalCourses;
  }

  ngOnDestroy() {
    this.deleteSub.unsubscribe();
    this.findSub.unsubscribe();
  }

}
