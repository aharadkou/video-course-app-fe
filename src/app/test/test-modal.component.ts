import { Component, Input } from '@angular/core';
import { ModalComponent } from '../shared/modal/modal.component';

@Component(
    {
      selector: 'app-modal',
      template: '<ng-content></ng-content>',
      providers: [
        { provide: ModalComponent, useClass: TestModalComponent }
      ]
    }
  )
  export class TestModalComponent {
    @Input() id;
    args = [ ];
  }
