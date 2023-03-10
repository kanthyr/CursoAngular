import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User> = [];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers(): void {
    this._userService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      }
    );

  }
}
