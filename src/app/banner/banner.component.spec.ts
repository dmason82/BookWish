import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BannerComponent} from './banner.component';
import {BooksLoadState} from '../model/books.loadstate';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have error condition', () => {
    component.loadState = BooksLoadState.FAILED;
    expect(component.isError()).toEqual(true);
    expect(component.isSuccess()).toEqual(false);
    expect(component.calculateClass().error).toEqual(true);
  });
  it('should not have success condition', () => {
    component.loadState = BooksLoadState.SUCCESSFUL;
    expect(component.isSuccess()).toEqual(true);
    expect(component.isError()).toEqual(false);
    expect(component.calculateClass().success).toEqual(true);
  });

});
