import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';

import { faPencilAlt, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html'

  //inputs: ['user:user-data']
})
export class UserComponent implements OnInit {

  //potrei anche fare a meno di specificare qualcosa nelle parentesi tonde e al parent indicare solo 'user' invece di 'user-data'
  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter(); //NB: la libreria è di angular/core
  //perchè questo evento fuoriesca da questo componente deve essere di tipo Output, e quindi può essere ascltato dal padre
  //userDeleted è la variabile qui interna, mentre onDeleteUser serve al padre per ascoltare

  @Output('onSelectUser') onSelectUser = new EventEmitter();

  faPen = faPencilAlt;
  faTrash = faTrash;
  faInfo = faInfo;

  constructor(private userService: UserService, private route: Router) {

  }

  ngOnInit() {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  showUserDetail(){
    this.route.navigateByUrl('/users/' + this.user?.id );
  }

  updateUser() {
    this.route.navigateByUrl('/users/' + this.user?.id + '/edit');
    this.route.navigate(['users', this.user?.id, 'edit']);
    this.onSelectUser.emit(this.user);

  }

}
