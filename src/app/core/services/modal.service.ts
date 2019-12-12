import { Injectable } from '@angular/core';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: ModalComponent[] = [];

    add(modal: ModalComponent) {
        this.modals.push(modal);
    }

    remove(id: string) {
        this.modals = this.modals.filter(modal => modal.id !== id);
    }

    open(id: string, ...args: any[]) {
        const modal: ModalComponent = this.findModal(id);
        modal.open(...args);
    }

    close(id: string) {
        const modal: ModalComponent = this.findModal(id);
        modal.close();
    }

    private findModal(id: string): ModalComponent {
        return this.modals.find(modal => modal.id === id);
    }
}
