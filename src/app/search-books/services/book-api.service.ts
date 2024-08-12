import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  debounceTime,
  map,
  take,
} from 'rxjs';
import { Book, BookResponse } from '../header-config.models';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private bookCart$: Subject<Book[]> = new BehaviorSubject([]);
  bookCartObs$: Observable<Book[]> = this.bookCart$.asObservable();
  bookCartTracker: Book[] = [];

  constructor(private httpClient: HttpClient) {}

  fetchBooks(term: string): Observable<Book[]> {
    return this.httpClient
      .get<BookResponse>(
        `https://www.googleapis.com/books/v1/volumes?q=${term}`
      )
      .pipe(
        take(1),
        map((res) => res.items)
      );
  }

  registerBooksOnCart(book: Book) {
    if (this.bookCartTracker.includes(book)) return;
    this.bookCartTracker.push(book);
    this.bookCart$.next(this.bookCartTracker);
  }

  removeBookFromCart(book: Book) {
    this.bookCartTracker = this.bookCartTracker.filter((myBook: Book) => myBook !== book)
    this.bookCart$.next(this.bookCartTracker);
  }
}
