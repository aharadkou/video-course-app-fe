import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  @Input() id: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  close() {
    this.modalService.close(this.id);
  }
}
