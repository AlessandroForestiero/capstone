import { EventService } from './../../services/event-service';
import { iEvent } from '../../models/iEvent';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, catchError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
 @Input() events: iEvent[] = [];

  constructor(private eventService: EventService) {}

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
