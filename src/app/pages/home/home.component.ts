import { iEvent } from './../../models/iEvent';
import { Component } from '@angular/core';
import { EventService } from '../../services/event-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
events: iEvent[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadAllEvents();
  }

  loadAllEvents(): void {
    this.eventService.getAllEvents().subscribe(events => {
      this.events = events;
    });
  }
}
