import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { changeLang, changeLangSuccess, changeLangFailure } from '../actions/lang.actions';
import { of } from 'rxjs';

@Injectable()
export class LangEffects {

  constructor(private actions: Actions, private translate: TranslateService) { }

  changeLang = createEffect(() => this.actions.pipe(
    ofType(changeLang),
    switchMap(action => this.translate.use(action.lang).pipe(
      map(() => changeLangSuccess({ lang: action.lang })),
      catchError(() => of(changeLangFailure()))
    ))
  ));

}
