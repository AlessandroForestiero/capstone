import { Subscription } from 'rxjs';
import { EventService } from './../../services/event-service';
import { Component } from '@angular/core';
import { iEvent } from '../../models/iEvent';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showClass: boolean = false;
  searchTerm!: string;
  subscription!: Subscription;
  searchNome: string = '';
  events: iEvent[] = [];
  isHovering: Boolean = false;
  constructor(private router: Router) {}

  searchEventByName() {
    this.router.navigate(['/search'], {
      queryParams: { name: this.searchNome },
    });
  }
  toggleHover(state: boolean) {
    this.isHovering = state;
  }
}
