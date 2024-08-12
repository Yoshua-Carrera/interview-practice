import { Component, OnInit } from '@angular/core';
import { UserProfileApiService } from './services/user-profile-api.service';
import { Observable } from 'rxjs';
import { User } from './models/user.models';

/**
 * 
 Assignment requirements
  Build an application in Angular.
  
  Render the avatar, name and image
  
  You can have your own UI design, but try to make it look nice.

Data/API
  https://reqres.in/api/users
 * 
 */

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  users$: Observable<User[]> = this.userProfileApiService.fetchUsers();
  constructor(private userProfileApiService: UserProfileApiService) {}

  ngOnInit() {}
}
