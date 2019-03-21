import {BookService} from './book.service';

describe('Book Service tests', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
  });

  it('Returns an observable', () => {
    const actual = service.getBooks();
    expect(actual.subscribe).toBeTruthy();
    });

  it('Returns valid books', () => {
    service.getBooks().subscribe((next) => {
      next.books.forEach((book) => {
        expect(book.title).toBeTruthy();
        expect(book.authors).toBeTruthy();
        expect(book.authors.length).toBeGreaterThanOrEqual(1);
      });
    });
  });
});
