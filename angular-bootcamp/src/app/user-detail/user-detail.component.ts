import { Component, Input } from '@angular/core';
import { UserInterface } from '../interfaces/user';
import { User } from '../classes/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
@Input() user:User;

  constructor(private userService: UsersService){
    this.user = {
      id:0,
      name: '',
      lastname: '',
      email: '',
      fiscalcode: '',
      province: '',
      phone: '',
      age: 0,
    }
  }

  saveUser() {
    alert(this.user.id )
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    }
  }
}
