import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState, getAvailableBooks, getLoadError, getLoadState, getWishedBooks, shouldViewWishlist} from './store/reducers';
import {LoadBooks, ToggleView, ToggleWish} from './store/actions/books.actions';
import {Observable} from 'rxjs';
import {Book} from './model/Book';
import {BooksLoadState} from './model/books.loadstate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'BookWish';
  availableBook$: Observable<Book[]>;
  wishedBooks$: Observable<Book[]>;
  bookLoadState$: Observable<BooksLoadState>;
  bookLoadError$: Observable<string>;
  shouldViewWishlist$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.store.dispatch(new LoadBooks());
    this.availableBook$ = this.store.select(getAvailableBooks);
    this.wishedBooks$ = this.store.select(getWishedBooks);
    this.bookLoadState$ = this.store.select(getLoadState);
    this.shouldViewWishlist$ = this.store.select(shouldViewWishlist);
    this.bookLoadError$ = this.store.select(getLoadError);
  }

  onToggleWishedBook(event: any){
    console.log(JSON.stringify(event));
    this.store.dispatch(new ToggleWish(event));
  }
  toggleView() {
    this.store.dispatch(new ToggleView());
  }

  getToggleText(isWishlist: boolean) {
    return isWishlist ? 'View Available Books' : 'View Wishlist';
  }

  isLoading(loadState: BooksLoadState) {
    return loadState === BooksLoadState.LOADING || loadState === BooksLoadState.NONE;
  }

  hasLoadingFailed(loadState: BooksLoadState) {
    return loadState === BooksLoadState.FAILED;
  }

}
