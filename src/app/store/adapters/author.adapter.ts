import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Author } from 'src/app/core/entities/course/author.model';


export const authorAdapter: EntityAdapter<Author> = createEntityAdapter<Author>();
