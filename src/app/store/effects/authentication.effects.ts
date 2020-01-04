import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UserCredentials } from 'src/app/core/entities/user/user-credentials';
import { UserService } from 'src/app/core/services/user.service';
import { switchMap, catchError, map, tap, flatMap } from 'rxjs/operators';
import { createObservable } from 'src/app/core/utils/observable-utils';
import { login, loginSuccess, loginFailure, logout, loginComplete } from '../actions/authentication.actions';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

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
      map((token: string) => loginSuccess({ token })),
      catchError(error => createObservable(loginFailure({ error })))
    ))
  ));

  loginSuccess = createEffect(() => this.actions.pipe(
    ofType(loginSuccess),
    switchMap(() => this.userService.getUserInfo()),
    map((credentials: UserCredentials) => loginComplete({ credentials }))
  ));

  loginComplete = createEffect(() => this.actions.pipe(
    ofType(loginComplete),
    tap(() => this.router.navigateByUrl('/'))
  ), { dispatch: false });

  logout = createEffect(() => this.actions.pipe(
    ofType(logout),
    tap(() => {
      this.router.navigateByUrl('/login');
    })
  ), { dispatch: false });

}
