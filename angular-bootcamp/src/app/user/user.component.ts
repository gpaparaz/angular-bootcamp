import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //potrei anche fare a meno di specificare qualcosa nelle parentesi tonde e al parent indicare solo 'user' invece di 'user-data'
  @Input('user-data') user: any;

  @Output('onDeleteUser') userDeleted = new EventEmitter(); //NB: la libreria è di angular/core
  //perchè questo evento fuoriesca da questo componente deve essere di tipo Output, e quindi può essere ascltato dal padre
  //userDeleted è la variabile qui interna, mentre onDeleteUser serve al padre per ascoltare


  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  deleteUser(user:any) {
    this.userDeleted.emit(this.user);
  }

}
