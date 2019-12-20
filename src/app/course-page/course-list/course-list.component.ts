import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { CourseService } from 'src/app/core/services/course.service';
import { CommunicatorService } from 'src/app/core/services/communicator.service';
import { Subscription } from 'rxjs';
import { COURSE_PAGE_ORDER, COURSE_PAGE_START, COURSE_PAGE_INC } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {

  courses: Course[];
  private deleteSub: Subscription;
  private findSub: Subscription;

  private loadStart = COURSE_PAGE_START;

  constructor(private courseService: CourseService, private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.fetchData(this.loadStart, COURSE_PAGE_INC);
    this.deleteSub = this.communicatorService.getData('courseDelete').subscribe(id => this.delete(id));
    this.findSub = this.communicatorService.getData('courseFind').subscribe(courses => this.courses = courses);
  }

  private fetchData(start: number, count: number) {
    this.courseService.getAll(this.loadStart, COURSE_PAGE_INC, COURSE_PAGE_ORDER)
                        .subscribe(courses => this.courses = this.courses.concat(courses));
  }

  delete(id: number) {
    this.courseService.deleteById(id).subscribe(
      {
        next: () => this.fetchData(COURSE_PAGE_START, this.courses.length),
        error: (error: Error) => console.log(error)
      }
    );
  }

  loadMore() {
    this.loadStart += COURSE_PAGE_INC;
    this.fetchData(this.loadStart, COURSE_PAGE_INC);
  }

  ngOnDestroy() {
    this.deleteSub.unsubscribe();
    this.findSub.unsubscribe();
  }

}
