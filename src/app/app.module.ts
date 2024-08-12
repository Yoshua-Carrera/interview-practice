import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChangeTileColorComponent } from './change-tile-color/change-tile-color.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookApiService } from './search-books/services/book-api.service';
import { HttpClientModule } from '@angular/common/http';
import { BookCardComponent } from './search-books/book-card/book-card.component';
import { SelectAllFormComponent } from './select-all-form/select-all-form.component';
import { GithubUserShowcaseComponent } from './github-user-showcase/github-user-showcase.component';
import { GithubUserService } from './github-user-showcase/github-user.service';
import { NoteReaderComponent } from './note-reader/note-reader.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { CustomCalendarComponent } from './custom-calendar/custom-calendar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoApiService } from './todo-list/services/todo-api.service';
import { UserProfileApiService } from './user-profile/services/user-profile-api.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCardComponent } from './user-profile/user-card/user-card.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    ChangeTileColorComponent,
    SearchBooksComponent,
    BookCardComponent,
    SelectAllFormComponent,
    GithubUserShowcaseComponent,
    NoteReaderComponent,
    TrafficLightComponent,
    CustomCalendarComponent,
    TodoListComponent,
    UserProfileComponent,
    UserCardComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    BookApiService,
    GithubUserService,
    TodoApiService,
    UserProfileApiService,
  ],
})
export class AppModule {}
