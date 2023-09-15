
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-users',

  templateUrl: 'users.component.html',
  styleUrls: [
    'users.component.css'
  ]
})

export class UsersComponent implements OnInit {
  title = 'Users'
  public users: User[] = [];

  //l'evento updateUser avrà come parametro un oggetto di tipo User
  @Output('updateUser') updateUser = new EventEmitter<User>();

//inietto il servizio nel componente
  constructor(private service: UserService) {
//in questo caso il costruttore si occupa solo di inizializzare il servizio
  }

  ngOnInit(): void {
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
