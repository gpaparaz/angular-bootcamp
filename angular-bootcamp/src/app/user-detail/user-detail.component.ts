import { Component, Input } from '@angular/core';
import { UserInterface } from '../interfaces/user';
import { User } from '../classes/user';
import { UsersService } from '../services/users.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  private usercopy: User;
  private __user: User;

  @Input() set user(user: User) {
    this.__user = user;
    this.usercopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UsersService) {
    this.user = new User();
    this.__user = new User();
    this.usercopy = new User();
  }

  saveUser() {

    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    }
    else {
      this.userService.createUser(this.user);
    }
    // Let's unbind this.user from previously created/modified user
    this.user = new User();
  }
  resetForm(form: FormGroup) {

    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.usercopy;
    }

  }
}
