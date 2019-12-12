import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Course } from 'src/app/core/entities/course/course.model';
import { CommunicatorService } from 'src/app/core/services/communicator.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { MODAL_COURSE_DELETE } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() course: Course;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  courseItemClass;
  starClass;

  constructor(private modalService: ModalService) { }

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
    this.modalService.open(MODAL_COURSE_DELETE, this.course.id);
  }

}
