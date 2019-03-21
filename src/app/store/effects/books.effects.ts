import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BookService} from '../../../services/book.service';
import {BooksActionTypes, LoadBooksSuccess} from '../actions/books.actions';
import {map, mergeMap} from 'rxjs/operators';


@Injectable()
export class BooksEffects {
  @Effect()
  loadBooks = this.actions.pipe(ofType(BooksActionTypes.LoadBooks),
  mergeMap(() => this.bookService.getBooks().pipe(map((payload) => new LoadBooksSuccess(payload)))));

  constructor(private actions: Actions, private bookService: BookService) { }
}
