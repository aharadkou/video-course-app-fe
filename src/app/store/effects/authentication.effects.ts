import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UserService } from 'src/app/core/services/user.service';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { login, loginSuccess, loginFailure, logout } from '../actions/authentication.actions';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AuthenticationEffects {

  constructor(
    private actions: Actions,
    private userService: UserService,
    private router: Router
  ) { }

  login = createEffect(() => this.actions.pipe(
    ofType(login),
    map(action => action.credentials),
    switchMap(credentials => this.userService.login(credentials.email, credentials.password).pipe(
      map(({token, user}) => loginSuccess({ token, user })),
      catchError(error => of(loginFailure({ error })))
    ))
  ));

  loginSuccess = createEffect(() => this.actions.pipe(
    ofType(loginSuccess),
    tap(() => this.router.navigateByUrl('/'))
  ), { dispatch: false });

  logout = createEffect(() => this.actions.pipe(
    ofType(logout),
    tap(() => {
      this.router.navigateByUrl('/login');
    })
  ), { dispatch: false });

}
