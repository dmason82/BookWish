import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../model/Book';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent {
  private books$: Book[];
  get books(): Book[] {
    return this.books$;
  }
  @Input()
  set books(books: Book[]) {
    this.books$ = books;
    this.dataSource = new MatTableDataSource(this.books$);
  }
  @Output() wishlistToggleEmitter: EventEmitter<Book> = new EventEmitter();
  displayedColumns: string[] = ['select', 'title', 'authors', 'releaseDate'];
  dataSource: MatTableDataSource<Book>;
  constructor() { }
  getWishButtonText(book: Book) {
    return book.isWished ? 'Remove from list' : 'Add to list';
  }
  toggleIsWished(row: Book) {
    console.log(JSON.stringify(row));
    this.wishlistToggleEmitter.emit(row);
  }
}
