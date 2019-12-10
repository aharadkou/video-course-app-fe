import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        this.modals.push(modal);
    }

    remove(id: string) {
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string, ...args: any[]) {
        const modal: any = this.findModal(id);
        modal.open(...args);
    }

    close(id: string) {
        const modal: any = this.findModal(id);
        modal.close();
    }

    private findModal(id: string): any {
        return this.modals.find(x => x.id === id);
    }
}
