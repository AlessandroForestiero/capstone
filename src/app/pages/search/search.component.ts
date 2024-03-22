import { Subscription, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { iEvent } from '../../models/iEvent';
import { EventService } from '../../services/event-service';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  events: iEvent[] = [];
subscriptions: Subscription = new Subscription();
searchNome: string | null = null;


constructor(private eventService: EventService,private route:ActivatedRoute){}


  ngOnInit() {
    this.subscriptions = this.route.queryParams.subscribe(params => {
      this.searchNome = params['name'] || null;
      this.subscriptions.add(
        this.eventService.getEventsByName(this.searchNome).pipe(
          catchError(error => {
            console.log(error);
            return [];
          })
        ).subscribe(data => {
          this.events = data;
          console.log(data);
        })
      );
    });
  }
}



