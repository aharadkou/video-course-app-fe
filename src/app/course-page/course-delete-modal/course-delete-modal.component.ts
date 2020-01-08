import { Component, ViewChild, Input } from '@angular/core';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { AppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import { deleteByIdComplete } from 'src/app/store/actions/course.actions';

@Component({
  selector: 'app-course-delete-modal',
  templateUrl: './course-delete-modal.component.html',
  styleUrls: ['./course-delete-modal.component.css'],
})
export class CourseDeleteModalComponent {

  constructor(private store: Store<AppState>) { }

  @ViewChild(ModalComponent, { static: true }) modal: ModalComponent;
  @Input() id: string;

  delete() {
    this.store.dispatch(deleteByIdComplete({ id: this.modal.args[0]}));
  }

}
