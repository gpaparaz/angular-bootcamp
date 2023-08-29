import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user';
import { User } from '../classes/User';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //NB: providedIn:root permette di rendere questo servizio globalmente accessibile in tutta l'app
})
export class UserService {
  apiUrl = environment.APIURL; //è una proprieta per accedere all'url

  constructor(private http: HttpClient){
  }

  //questa chiamata torna un obervable di oggetti, dove noi definiamo il tipo di oggetti tornati
  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<User> {

    return this.http.get<User>(this.apiUrl + '/' + id);
  }

  deleteUser(user: User) {
    return this.http.delete<User>(this.apiUrl + '/' + user.id);
  }
  updateUser(user: UserInterface) {
    return this.http.put<User>(this.apiUrl + '/' + user.id, user);
  }
  createUser(user: UserInterface) {
    return this.http.post<User>(this.apiUrl, user);
  }
}
