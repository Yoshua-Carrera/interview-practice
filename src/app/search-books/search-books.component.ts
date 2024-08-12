import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book, HeaderConfig, HeaderOptions } from './header-config.models';
import {
  BehaviorSubject,
  Observable,
  Subject,
  debounceTime,
  of,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { BookApiService } from './services/book-api.service';
/**
 * 
Assignment requirements
There are two pages: Home and Show Wishlist page. User can switch pages. Default page is Home page.
  Home page:
    Create a Search Bar to input contents (bookname) to search books (see the gif below).
      We expect every input typing in the search input should send request to backend, but we can improve the performance and UX by using debounceTime.
    
    After searching, List result result (books) in the Booklist section, each book as a card, each card should contains: 
      book pickture, 
      book name, 
      publisher, 
      publish date, 
      description. 
      (if any info not list in the response json, do not show it in the card.)

  Click a book card can add this book into Wishlist.
  
  Wishlist only list books name, user can delete book from the Wishlist by click delete button for each book.

  Show Wishlist Page: (Optional)
    When user switches to this page. it will show book list names from Home page's wishlist.

  API: https://www.googleapis.com/books/v1/volumes?q=bookname

  https://www.evernote.com/shard/s546/client/snv?isnewsnv=true&noteGuid=9ecd9350-bc7d-2711-aaa4-dbf3ab9d71e6&noteKey=i0DyZ44YZxpHIzhaNK9eSV0Yi683DFqywgTiyuvy4SNaAAvTIqgKiZFXnA&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs546%2Fsh%2F9ecd9350-bc7d-2711-aaa4-dbf3ab9d71e6%2Fi0DyZ44YZxpHIzhaNK9eSV0Yi683DFqywgTiyuvy4SNaAAvTIqgKiZFXnA&title=Search%2Bbooks
 * 
 */
@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss'],
})
export class SearchBooksComponent implements OnInit, OnDestroy {
  headerOptions: typeof HeaderOptions = HeaderOptions;
  searchTerm: any = '';
  headerConfig: HeaderConfig[] = [
    { title: 'My Application', id: HeaderOptions.MY_APPLICATION },
    { title: 'Home', id: HeaderOptions.HOME },
    { title: 'Show Books', id: HeaderOptions.SHOW_BOOKS },
  ];
  bookResults$: Observable<Book[]>;
  searchBufferSbj$: Subject<string> = new BehaviorSubject<string>('');
  searchBufferObs$: Observable<string> = this.searchBufferSbj$.asObservable();
  onDestroy$: Subject<void> = new Subject();
  activeTab: HeaderOptions = HeaderOptions.HOME;
  bookCart$: Observable<Book[]> = this.bookApiService.bookCartObs$

  constructor(private bookApiService: BookApiService) {}

  ngOnInit() {
    this.searchBufferObs$
      .pipe(
        debounceTime(500),
        tap((term) => {
          if (term) {
            this.bookResults$ = this.bookApiService.fetchBooks(term);
            this.bookResults$
              .pipe(take(1))
              .subscribe((data) => console.log(data));
          } else {
            this.bookResults$ = of([]);
          }
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }

  tabChange(id: HeaderOptions) {
    this.activeTab = id;
  }

  keyEvent(term: string) {
    this.searchBufferSbj$.next(term);
  }

  removeFromCart(book: Book) {
    this.bookApiService.removeBookFromCart(book)
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
