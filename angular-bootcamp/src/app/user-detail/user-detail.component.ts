import { Component, Input } from '@angular/core';
import { UserInterface } from '../interfaces/user';
import { User } from '../classes/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
@Input() user:User;

constructor(){
  this.user = {
    id:0,
    name: '',
    lastname: '',
    email: '',
    fiscalcode: '',
    province: '',
    phone: '',
    age: 0,
  }
}
}
