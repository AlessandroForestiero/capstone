import { EventService } from './../../services/event-service';
import { iEvent } from '../../models/iEvent';
import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core';
import { Subscription, catchError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() events: iEvent[] = [];


   constructor(private router:Router) {}


@ViewChild('slider', { static: false }) slider!: ElementRef<HTMLDivElement>;
  defaultTransform: number = 0;
  itemWidth: number = 360; // Larghezza di un singolo elemento dello slider



  ngOnInit(): void {
    // Inizializza lo slider e imposta la trasformazione predefinita a 0
    this.defaultTransform = 0;
  }

  goNext(): void {
    // Scorri verso destra
    this.defaultTransform -= this.itemWidth;
    if (Math.abs(this.defaultTransform) >= this.slider.nativeElement.scrollWidth - this.slider.nativeElement.clientWidth) {
      // Se siamo arrivati all'ultimo elemento, torna al primo
      this.defaultTransform = 0;
    }
    this.slider.nativeElement.style.transform = `translateX(${this.defaultTransform}px)`;
  }

  goPrev(): void {
    // Scorri verso sinistra
    if (Math.abs(this.defaultTransform) === 0) {
      this.defaultTransform = 0;
    } else {
      this.defaultTransform += this.itemWidth;
    }
    this.slider.nativeElement.style.transform = `translateX(${this.defaultTransform}px)`;
  }
  navigateToDetails(event:iEvent) { // Supponendo che l'oggetto evento sia di tipo any
    this.router.navigate(['/dettagli'], { state: { event } }); // Passa l'intero oggetto evento
  }
}

