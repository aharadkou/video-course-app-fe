import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs/operators';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivateChild {
  constructor(private userService: UserService,
              private router: Router) { }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.userService.isAuthenticated()
      .pipe(
        tap((isAuthenticated: boolean) => {
          if (!isAuthenticated) {
            this.router.navigateByUrl('/login');
          }
        })
      );
  }

}