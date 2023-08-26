import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: any;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  deleteUser(user:any) {
    this.userService.deleteUser(this.user);
  }

}
