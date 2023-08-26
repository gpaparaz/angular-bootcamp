import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';

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

  //inietto il servizio nel componente
  constructor(private service: UsersService){
    //in questo caso il costruttore si occupa solo di inizializzare il servizio
  }

  ngOnInit(): void {
    this.users = this.service.getUsers();

  }

  onDeleteUser(user:User){
    this.service.deleteUser(user);
  }

}
