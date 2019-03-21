import {BooksActions, BooksActionTypes, LoadBooksFailure, LoadBooksSuccess, ToggleWish} from '../actions/books.actions';
import {Book} from '../../model/Book';
import {BooksLoadState} from '../../model/books.loadstate';

export interface BookListState {
  books: Book[];
  viewWishlist: boolean;
  loadState: BooksLoadState;
  error: string;
}

export const initialState = {books: [], viewWishlist: false, loadState: BooksLoadState.NONE, error: ''};

export function reducer(state = initialState,
                        action: BooksActions) {
  switch (action.type) {
    case BooksActionTypes.LoadBooks:
      return handleLoading(state);
    case BooksActionTypes.LoadBooksSuccess:
      return handleLoadSuccess(state, action);
    case BooksActionTypes.LoadBooksFailure:
      return handleLoadFailure(state, action);
    case BooksActionTypes.ToggleBookWish:
      return handleToggleWish(state, action);
    case BooksActionTypes.ToggleView:
      return handleToggleView(state);
    default:
      return state;
  }
}
const handleLoading = (theState) => {
  return {...theState, loadState: BooksLoadState.LOADING, error: ''};
};

const handleLoadSuccess = (theState, theAction: LoadBooksSuccess ) => {
  return {...theState, books: theAction.payload.books, loadState: BooksLoadState.SUCCESSFUL};
};

const handleLoadFailure = (theState, theAction: LoadBooksFailure) => {
  return{...theState, loadState: BooksLoadState.FAILED, error: theAction.payload.error};
};

const handleToggleWish = (theState, action: ToggleWish) => {
  const newBooks = theState.books.slice();
  newBooks.forEach((book) => {
    if (isCurrentBook(book, action.book)) {
      book.isWished = !book.isWished;
    }
  });
  return {...theState, books: newBooks};
};

const handleToggleView = (theState) => {
  const viewWishes = !theState.viewWishlist;
  return {...theState, viewWishlist: viewWishes};
};
/**
 * A function to check for deep equality between two books. This is to allow for us to filter the book out of the state, toggle its
 * wish state, and then we can return the new state.
 */
const isCurrentBook = (leftBook: Book, rightBook: Book) => {
  return leftBook.title === rightBook.title && leftBook.releaseDate === rightBook.releaseDate &&
    leftBook.authors.length === rightBook.authors.length &&
    leftBook.authors.every((author, index ) => author === rightBook.authors[index] );
};
