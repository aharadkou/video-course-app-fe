import { EntityState } from '@ngrx/entity';
import { authorAdapter } from '../adapters/author.adapter';
import { Author } from 'src/app/core/entities/course/author.model';

export const initialState: AuthorState = {
  ...authorAdapter.getInitialState(),
  errorMessage: null
};

export interface AuthorState extends EntityState<Author> {
  errorMessage: string;
}
