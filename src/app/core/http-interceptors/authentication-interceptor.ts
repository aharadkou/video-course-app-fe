import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, flatMap, first, take, single } from 'rxjs/operators';
import { HEADER_TOKEN, UNAUTHORIZED_STATUS } from '../constants/constants';
import { AppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { selectToken } from 'src/app/store/selectors/authentication.selectors';
import { logout } from 'src/app/store/actions/authentication.actions';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.pipe(
      first(),
      select(selectToken),
      flatMap((token: string) => {
        let requestWithToken: HttpRequest<any>;
        if (token) {
          requestWithToken = req.clone({
            setHeaders: { [HEADER_TOKEN]: token }
          });
        }
        return next.handle(requestWithToken || req).pipe(
          tap(
            {
              error: error => {
                if (error.status === UNAUTHORIZED_STATUS) {
                  this.store.dispatch(logout());
                }
              }
            }
          )
        );
      }
      )
    );
  }
}
