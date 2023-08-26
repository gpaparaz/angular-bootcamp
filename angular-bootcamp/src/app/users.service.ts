import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //NB: providedIn:root permette di rendere questo servizio globalmente accessibile in tutta l'app
})
export class UsersService {
  users = [
    {
      name: 'Pippo',
      lastname: 'Pluto',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 23
    },
    {
      name: 'Topolino',
      lastname: 'Minnie',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 20
    },
    {
      name: 'Tizio',
      lastname: 'Caio',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 34
    },
    {
      name: 'Hidran4',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 45
    }
  ];

   getUsers(){
    return this.users;
  }

  deleteUser(user:any){
    const index = this.users.indexOf(user);
    if(index > -1){
      this.users.splice(index, 1);
    }
  }

  constructor() { }
}
