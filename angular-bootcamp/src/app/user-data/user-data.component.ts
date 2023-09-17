import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public user: UserInterface | undefined;

  //activated route rappresenta la rotta che è stata attivata, e quindi consente di accedere a params, paramMap ecc
  constructor(private userService: UserService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    //paramMap è un observable, contiene una mappa con i parametri required e optional passati con la rotta,
    //permette di leggere diversi parametri alla volta
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id') ); // '12'
        this.userService.getUser(id)
          .subscribe(user => this.user = user);

    });
  }

}
