import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',

  templateUrl: 'users.component.html',
  styleUrls: [
    'users.component.css'
  ]
})

export class UsersComponent {
  title = 'Users';
  public users:any = [];

  //inietto il servizio nel componente
  constructor(private service: UsersService){
    this.users = service.getUsers();
  }

}
