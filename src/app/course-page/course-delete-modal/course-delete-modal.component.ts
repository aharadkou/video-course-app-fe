import { Component, ViewChild, Input } from '@angular/core';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { CommunicatorService } from 'src/app/core/services/communicator.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { MODAL_COURSE_DELETE } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-course-delete-modal',
  templateUrl: './course-delete-modal.component.html',
  styleUrls: ['./course-delete-modal.component.css']
})
export class CourseDeleteModalComponent {

  constructor(
    private modalService: ModalService,
    private communicatorService: CommunicatorService
  ) { }

  @ViewChild(ModalComponent, {static: true}) modal: ModalComponent;
  @Input() id: string;


  delete() {
    this.communicatorService.publishData(this.modal.args[0]);
    this.modalService.close(this.id);
  }

}
