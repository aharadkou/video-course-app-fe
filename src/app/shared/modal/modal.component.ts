import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() id: string;

  constructor(protected modalService: ModalService, protected el: ElementRef) { }

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
    this.el.nativeElement.addEventListener('click', (e: any) => {
      if (e.target.className === 'modal') {
        this.close();
      }
    });
    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.el.nativeElement.remove();
  }

  open(...args: any[]) {
    this.toggleModal();
  }

  close() {
    this.toggleModal();
  }

  private toggleModal() {
    this.el.nativeElement.classList.toggle('modal-opened');
    document.body.classList.toggle('modal-open');
  }
}
