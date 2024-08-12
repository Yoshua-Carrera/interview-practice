import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GithubUser, GithubUserResponse } from './github.models';

@Injectable({
  providedIn: 'root',
})
export class GithubUserService {
  constructor(private httpClient: HttpClient) {}

  findGithubUsers(term: string): Observable<GithubUser[]> {
    return this.httpClient.get<GithubUserResponse>(
      `https://api.github.com/search/users?q=${term}`
    ).pipe(
      map(res => res.items)
    );
  }
}
