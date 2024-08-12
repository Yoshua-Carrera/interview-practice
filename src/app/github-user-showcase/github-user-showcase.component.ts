import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GithubUser } from './github.models';
import { Observable, take, tap } from 'rxjs';
import { GithubUserService } from './github-user.service';

/**
 * 
 Assignment requirements
  when user enter the website, there should be an input and a search button
  
  The input field will expect GitHub usernames. A GitHub username may only contains alphanumeric characters or hyphens (-).
  
  When the search button is clicked, validate the input. If it is valid, use the following API to query GitHub usernames that contain the text received in the input.
  
  Display the search results on a search results page. Display the results in a sample table.
  
  The columns that are require are:
  
    User ID
    Username
    Profile URL Link

  Add a filter input that checks if any of the fields contain the typed text and filters the table accordingly.

  API: https://api.github.com/search/users?q=
 * 
 */

@Component({
  selector: 'app-github-user-showcase',
  templateUrl: './github-user-showcase.component.html',
  styleUrls: ['./github-user-showcase.component.scss'],
})
export class GithubUserShowcaseComponent implements OnInit {
  searchForm: FormGroup = this.fb.group({
    user: ['', Validators.required],
  });
  githubUserList$: Observable<GithubUser[]>;
  githubUsers: GithubUser[];
  displayList: GithubUser[];
  searchTerm: string;
  constructor(
    private fb: FormBuilder,
    private githubUserService: GithubUserService
  ) {}

  ngOnInit() {}

  fetchUsers() {
    this.githubUsers = [];
    this.displayList = [];
    this.githubUserList$ = this.githubUserService.findGithubUsers(
      this.searchForm.value['user']
    );
    this.githubUserList$
      .pipe(
        take(1),
        tap((users) => {
          this.githubUsers = users;
          this.displayList = users;
        })
      )
      .subscribe();
  }

  filterUsers(filterTerm: string) {
    if (this.githubUsers.length) {
      this.displayList = this.githubUsers.filter(
        (user) =>
          `${user.id}`.includes(filterTerm) ||
          user.login.includes(filterTerm) ||
          user.url.includes(filterTerm)
      );
    }
  }
}
