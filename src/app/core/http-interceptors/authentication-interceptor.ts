import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs/operators';
import { UNAUTHORIZED_STATUS, HEADER_TOKEN } from '../constants/constants';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private userService: UserService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestWithToken: HttpRequest<any>;
    if (this.userService.isAuthenticated()) {
      requestWithToken = req.clone({
        setHeaders: { [HEADER_TOKEN]: this.userService.getToken() }
      });
    }
    return next.handle(requestWithToken || req).pipe(
      tap(
        {
          error: error => {
            if (error.status === UNAUTHORIZED_STATUS) {
              this.userService.logout();
              this.router.navigateByUrl('/login');
            }
          }
        }
      )
    );
  }
}
