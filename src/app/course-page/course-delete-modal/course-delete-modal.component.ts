import { Component, OnInit, ElementRef, ViewChild, Output } from '@angular/core';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { ModalService } from 'src/app/core/services/modal.service';
import { EventEmitter } from 'events';
import { CommunicatorService } from 'src/app/core/services/communicator.service';

@Component({
  selector: 'app-course-delete-modal',
  templateUrl: './course-delete-modal.component.html',
  styleUrls: ['./course-delete-modal.component.css']
})
export class CourseDeleteModalComponent extends ModalComponent {

  deletedId: number;

  constructor(
    modalService: ModalService,
    el: ElementRef,
    private communicatorService: CommunicatorService
  ) {
    super(modalService, el);
  }

  ngOnInit() {
    // empty
  }

  open(...args: any[]) {
    super.open();
    this.deletedId = args[0];
  }

  delete() {
  }


}
