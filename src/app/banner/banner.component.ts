import {Component, Input, OnInit} from '@angular/core';
import {BooksLoadState} from '../model/books.loadstate';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {
  @Input() loadState: BooksLoadState;
  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }
  getClass = () => {
    switch (this.loadState) {
      case BooksLoadState.FAILED:
        return 'error';
      case BooksLoadState.SUCCESSFUL:
        return 'success';
      default:
        return 'info';
    }
  }
  calculateClass = () => {
    return {
      error: this.loadState === BooksLoadState.FAILED,
      success: this.loadState === BooksLoadState.SUCCESSFUL,
      info: this.loadState !== BooksLoadState.FAILED && this.loadState !== BooksLoadState.SUCCESSFUL
    };
  }
  isError =  () => {
    return this.loadState === BooksLoadState.FAILED;
  }
  isSuccess = () => {
    return this.loadState === BooksLoadState.SUCCESSFUL;
  }


}
