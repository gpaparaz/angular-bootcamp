import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root' //NB: providedIn:root permette di rendere questo servizio globalmente accessibile in tutta l'app
})
export class UserService {
  users:User[] = [
    {
      id:1,
      name: 'Pippo',
      lastname: 'Pluto',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 23
    },
    {
      id:2,
      name: 'Topolino',
      lastname: 'Minnie',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 20
    },
    {
      id:3,
      name: 'Tizio',
      lastname: 'Caio',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 34
    },
    {
      id:4,
      name: 'Hidran4',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 45
    }
  ];
  getUsers(): User[] {

    return this.users;
  }
  getUser(id: number): User | undefined {

    return this.users.find(user => user.id === id);
  }
  deleteUser(user: User) {

    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
  updateUser(user: UserInterface) {
    const idx = this.users.findIndex(v => v.id === user.id);

    if (idx !== -1) {
      this.users[idx] = { ...user };
    }
  }
  createUser(user: UserInterface) {

    this.users.splice(0, 0, { ...user });

  }
}
