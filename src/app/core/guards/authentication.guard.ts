import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { selectIsAuthenticated } from 'src/app/store/selectors/authentication.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivateChild {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(selectIsAuthenticated),
      tap((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          this.router.navigateByUrl('/login');
        }
      }));
  }

}
