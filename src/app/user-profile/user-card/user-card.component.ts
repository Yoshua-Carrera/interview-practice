import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.models';
import { Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  constructor() {}

  ngOnInit() {}
}
