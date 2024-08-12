import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../header-config.models';
import { BookApiService } from '../services/book-api.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  constructor(private bookApiService: BookApiService) {}

  ngOnInit() {}

  bookToCart(book: Book) {
    this.bookApiService.registerBooksOnCart(book);
  }
}
