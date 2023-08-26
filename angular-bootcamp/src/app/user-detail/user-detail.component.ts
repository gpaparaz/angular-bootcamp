import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
@Input() user:User;

constructor(){
  this.user = {
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
