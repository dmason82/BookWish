import { Action } from '@ngrx/store';
import {LoadBooksSuccessPayload} from '../../model/LoadBooksSuccessPayload';
import {LoadBooksFailurePayload} from '../../model/LoadBooksFailurePayload';
import {Book} from '../../model/Book';

export enum BooksActionTypes {
  LoadBooks = '[Books] Load Books',
  LoadBooksSuccess = '[Books] Load Books success',
  LoadBooksFailure = '[Books] Load Books failure',
  ToggleBookWish = '[Books] Toggle Wish',
  ToggleView = '[Books] Toggle View'
}

export class LoadBooks implements Action {
  readonly type = BooksActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements  Action {
  readonly type = BooksActionTypes.LoadBooksSuccess;

  constructor(public payload: LoadBooksSuccessPayload) { }
}

export class LoadBooksFailure implements Action {
  readonly type = BooksActionTypes.LoadBooksFailure;

  constructor(public payload: LoadBooksFailurePayload) { }
}
export class ToggleWish implements Action {
  readonly type = BooksActionTypes.ToggleBookWish;
  constructor(public book: Book) { }
}

export  class ToggleView implements Action {
  readonly type = BooksActionTypes.ToggleView;
}

export type BooksActions = LoadBooks | LoadBooksSuccess | LoadBooksFailure | ToggleWish | ToggleView;
