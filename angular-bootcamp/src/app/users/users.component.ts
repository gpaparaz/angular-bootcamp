import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserInterface } from '../interfaces/user';
import { User } from '../classes/user';

@Component({
  selector: 'app-users',

  templateUrl: 'users.component.html',
  styleUrls: [
    'users.component.css'
  ]
})

export class UsersComponent implements OnInit{
  title = 'Users';
  public users:User[] = [];

    //l'evento updateUser avrà come parametro un oggetto di tipo User
  @Output() updateUser = new EventEmitter<User>();

  //inietto il servizio nel componente
  constructor(private service: UsersService){
    //in questo caso il costruttore si occupa solo di inizializzare il servizio
  }

  ngOnInit(): void {
    this.users = this.service.getUsers();

  }

  onDeleteUser(user: User) {
    this.service.deleteUser(user);
  }
  onSelectUser(user: User) {
    //creo una copia dell'oggetto che sto leggendo e lo passo tramite evento
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);

  }

}
