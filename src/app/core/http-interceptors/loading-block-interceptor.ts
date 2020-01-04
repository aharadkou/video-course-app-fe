import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingBlockService } from '../services/loading-block.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingBlockInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingBlockService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();
    return next.handle(req).pipe(
      finalize(() => this.loadingService.hide())
    );
  }
}
