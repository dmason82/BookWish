import * as fromBooks from './book.reducer';
import {mockBooks} from '../../../services/mock-books';
import {LoadBooks, LoadBooksFailure, LoadBooksSuccess, ToggleView, ToggleWish} from '../actions/books.actions';
import {BooksLoadState} from '../../model/books.loadstate';
import {initialState} from './book.reducer';
import {LoadBooksFailurePayload} from '../../model/LoadBooksFailurePayload';

describe('Reducer tests', () => {
  let state;
  const reducer = fromBooks.reducer;
  beforeEach(() => {
    state = initialState;
  });

  it('Should set loading state', () => {
    const actual = reducer(state, new LoadBooks());
    expect(actual.loadState).toEqual(BooksLoadState.LOADING);
  });

  it('loads books successfully', () => {
    const theBooks = mockBooks;
    const actual = reducer(state, new LoadBooksSuccess({books: theBooks}));
    expect(actual.books.length).toBe(theBooks.length);
    expect(actual.books[0]).toEqual(theBooks[0]);
    expect(actual.books[1]).toEqual(theBooks[1]);
    expect(actual.books[theBooks.length - 1]).toEqual(theBooks[theBooks.length - 1]);
    expect(actual.loadState).toEqual(BooksLoadState.SUCCESSFUL);
  });

  it('toggles wish state successfully for false to true case', () => {
    const theBooks = mockBooks;
    state.books = theBooks;
    const actual = reducer(state, new ToggleWish(theBooks[0]));
    expect(actual.books.length).toEqual(theBooks.length);
    expect(actual.books[0].isWished).toBeTruthy();
  });

  it('toggles wish state successfully for true to false case', () => {
    const theBooks = mockBooks;
    theBooks.forEach((book) => book.isWished = true);
    state.books = theBooks;
    const actual = reducer(state, new ToggleWish(state.books[0]));
    expect(actual.books.length).toEqual(theBooks.length);
    expect(actual.books[0].isWished).toBeFalsy();
  });

  /**
   * As we default to false in initial state, first test the view wishlist state.
   */
  it('Toggles the wishlist from false to true', () => {
    const actual = fromBooks.reducer(state, new ToggleView());
    expect(actual.viewWishlist).toEqual(true);
  });

  it('Toogles the wishlist from true to false', () => {
    const testState = {...state, viewWishlist: true};
    const actual = fromBooks.reducer(testState, new ToggleView());
    expect(actual.viewWishlist).toEqual(false);
  });

  it('Handles book load failure', () => {
    const FAIL = 'Rate Exceeded';
    const actual = fromBooks.reducer(state, new LoadBooksFailure(new LoadBooksFailurePayload(FAIL)));
    expect(actual.error).toEqual(FAIL);
  });
});
