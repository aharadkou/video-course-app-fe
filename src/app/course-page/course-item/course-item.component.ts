import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { CommunicatorService } from 'src/app/core/services/communicator.service';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit, OnDestroy {

  @Input() course: Course;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  courseItemClass;
  starClass;

  constructor(
    private communicatorService: CommunicatorService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.courseItemClass = {
      'course-item shadow': true,
      'course-item-top-rated': this.course.topRated
    };
    this.starClass = {
      'star-icon': true,
      hidden: !this.course.topRated
    };
  }

  openDeleteModal() {
    this.modalService.open('course-delete-modal', this.course.id);
  }

  ngOnDestroy() {
  }
}
