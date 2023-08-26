import { Component } from '@angular/core';
import { UserInterface } from './interfaces/user';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bootcamp';

  showForm = false;
  userSelected: User = {
    id:0,
    name: '',
    lastname: '',
    email: '',
    fiscalcode: '',
    province: '',
    phone: '',
    age: 0,
  }

  updateUser(user:User){
    this.showForm = true;
    this.userSelected = user;
  }
}
