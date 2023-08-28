import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/User';

import { faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/users.service';
@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html'

  //inputs: ['user:user-data']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  faPen = faPencilAlt;
  faTrash = faTrash;
  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }
  deleteUser() {

    this.userDeleted.emit(this.user);


  }
  updateUser() {
    console.log(this.user);
    this.onSelectUser.emit(this.user);

  }
}
