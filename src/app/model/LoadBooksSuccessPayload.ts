import {Book} from './Book';

export class LoadBooksSuccessPayload {
  books: Book[];
  constructor(books: Book[]) { this.books = books; }
}
