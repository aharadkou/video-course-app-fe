import { Injectable } from '@angular/core';
import { AuthorService } from 'src/app/core/services/author.service';
import { Actions, createEffect, ofType, act } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadFiltered, loadFilteredSuccess, loadFilteredFailure } from '../actions/author.actions';

@Injectable()
export class AuthorEffects {
  constructor(private actions: Actions, private authorService: AuthorService) { }

  loadFiltered = createEffect(() => this.actions.pipe(
    ofType(loadFiltered),
    switchMap(action => this.authorService.getAllFiltered(action.filter, action.selectedIds).pipe(
      map(authors => loadFilteredSuccess({ authors })),
      catchError(error => of(loadFilteredFailure({ error })))
    ))
  ));
}
