import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints, User, UserResponse } from '../models/user.models';
import { Observable, map } from 'rxjs';

@Injectable()
export class UserProfileApiService {
  constructor(private httpClient: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.httpClient
      .get<UserResponse>(Endpoints.USER)
      .pipe(map((res: UserResponse) => res.data));
  }
}
