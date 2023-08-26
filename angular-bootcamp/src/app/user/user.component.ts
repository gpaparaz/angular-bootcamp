import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //potrei anche fare a meno di specificare qualcosa nelle parentesi tonde e al parent indicare solo 'user' invece di 'user-data'
  @Input('user-data') user: User | undefined;

  @Output('onDeleteUser') userDeleted = new EventEmitter(); //NB: la libreria è di angular/core
  //perchè questo evento fuoriesca da questo componente deve essere di tipo Output, e quindi può essere ascltato dal padre
  //userDeleted è la variabile qui interna, mentre onDeleteUser serve al padre per ascoltare

  @Output() onSelectUser = new EventEmitter();

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser(){
    this.onSelectUser.emit(this.user);
  }

}
