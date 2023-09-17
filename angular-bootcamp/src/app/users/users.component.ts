
import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserComponent } from '../user/user.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',

  templateUrl: 'users.component.html',
  styleUrls: [
    'users.component.css'
  ]
})

export class UsersComponent implements OnInit, AfterViewInit {
  title = 'Users'
  // public users: User[] = [];
  event$ = new BehaviorSubject(true);
  public users$: Observable<User[]> = this.service.getUsers(); //serve per fare l'unsubscribe e poi smontare il componente
//inserire  = this.service.getUsers() serve a fare la subscribe quando sta inizializzando
//il dollaro serve per identificare la variabile come observable, è una convenzione ma non è obbligatorio
// l'obserble osserva uno stream di dati, in questo caso un array di users. questo observable viene chiamato dall'html


  //l'evento updateUser avrà come parametro un oggetto di tipo User
  @Output('updateUser') updateUser = new EventEmitter<User>();

  @ViewChildren(UserComponent, { read: ElementRef }) trs!: QueryList<ElementRef>
  /*permette di accedere alla vista da parent a figlio, e avere tutti i figli o un figlio della lista
  gli devo passare un componente da leggere (UserComponent). QueryList è un elenco di nodi col riferimento fatto. facciamo
  un foreach per accedere a questo elemento. trs è la variabile per accedere a questo elemento, e il tipo è QueryList
  con read diciamo che vogliamo leggere un riferimento ad un elemento del dom. che nel nostro caso è una lista
  */


//inietto il servizio nel componente
  constructor(private service: UserService, private router: Router) {
//in questo caso il costruttore si occupa solo di inizializzare il servizio
  }

  ngOnInit(): void {
  }

  //quando la vista è inizializzata allora accediamo ai figli
  ngAfterViewInit(): void {
    // this.trs.forEach(ele=> console.log(ele));
    console.log('after view init', this.trs);
  }

  onDeleteUser(user: User) {
    /*
    diverse soluzioni per affrontare questa operazione
    se non avessi un observable ma avessi un array di utenti, potrei ciclare sull'array,
    eliminare quello che non mi serve e poi ricaricare con la getUsers.subscribe
    in questo caso dovrei mettere in ngOnInit la subscribe di getUsers per vedere a video i dati

    se non volessi rifare la chiamata a server e volessi usare le funzionalità di angular,
    allora uso viewChildren.
    facciamo il foreach, se un elemento coincide con quello che si vuole eliminare allora manipoliamo il
    dom per eliminare quell'elemento
    */

    this.service.deleteUser(user).subscribe(res => {
      this.trs.forEach(ele => {
        //verifico se l'elemento nativo del dom è quello selezionato, quindi manipola il dom per rimuovere l'elemento
        const el = ele.nativeElement;
        if (Number(el.id) === user.id) {
          el.parentNode.removeChild(el); //removeChild rimuovere il figlio del parent
          //el è il tbody
        }
      })
    });
  }

  onSelectUser(user: User) {
    //creo una copia dell'oggetto che sto leggendo e lo passo tramite evento
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);

  }
}
