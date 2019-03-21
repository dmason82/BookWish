import {
  ActionReducerMap,
  createSelector
} from '@ngrx/store';

import * as fromBooks from './book.reducer';
import {BookListState} from './book.reducer';
export interface AppState {
  bookState: fromBooks.BookListState;
}

export const reducers: ActionReducerMap<AppState> = {
  bookState: fromBooks.reducer
};

const getBooksState = (state: AppState) => state.bookState;
export const getWishedBooks = createSelector(getBooksState,
(bookState) => bookState.books.filter((book) => book.isWished) );
export const getAvailableBooks = createSelector(getBooksState,
(bookState) => bookState.books.filter((book) => !book.isWished));
export const shouldViewWishlist = createSelector(getBooksState, (bookState) => bookState.viewWishlist );
export const getLoadState = createSelector(getBooksState, (bookState) => bookState.loadState);
export const getLoadError = createSelector(getBooksState, (state: BookListState) => state.error);

