import { Subscription } from 'rxjs';
import { EventService } from './../../services/event-service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { iEvent } from '../../models/iEvent';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  showClass: boolean = false;
  searchTerm!: string;
  subscription!: Subscription;
  searchNome: string = '';
  searchTipo: string = '';
  events: iEvent[] = [];
  isHovering: Boolean = false;
 @Output() eventEmitter = new EventEmitter<string>();
  categoryString!:string
  userName:string|undefined='';
  constructor(private router: Router,private authSvc:AuthService) {}

  ngOnInit(){
  this.authSvc.user$.subscribe(data=>this.userName=data?.userName)
  }

  logout(){
    this.authSvc.logout();

    console.log("utente sloggato");

    this.userName='';
  }

  searchEventByName() {
    this.router.navigate(['/search'], {
      queryParams: { name: this.searchNome },
    });
  }
  searchEventByType(tipo:string) {
    this.router.navigate(['/category'], {
      queryParams: { tipo: tipo},
    });
  }
saveString(value: string) {
this.categoryString=value
  this.eventEmitter.emit(this.categoryString)


}
  toggleHover(state: boolean) {
    this.isHovering = state;
  }
}
