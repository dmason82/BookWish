import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MatButtonModule, MatProgressSpinnerModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BookListComponent} from './book-list/book-list.component';
import {BannerComponent} from './banner/banner.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreDevtoolsModule.instrument(),
        StoreModule.forRoot(reducers),
        MatButtonModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatTableModule,
        NoopAnimationsModule],
      declarations: [
        AppComponent,
        BookListComponent,
        BannerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BookWish'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('BookWish');
  });
});
