import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {LoadBooksSuccessPayload} from '../app/model/LoadBooksSuccessPayload';
import {mockBooks} from './mock-books';
@Injectable({providedIn: 'root'})
export class BookService {
  getBooks = () => {
    return of(new LoadBooksSuccessPayload(mockBooks));
  }
}
