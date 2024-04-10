import { TipoEvento } from './../../models/tipo-evento';
import { Subscription, catchError } from 'rxjs';
import { EventService } from './../../services/event-service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { iEvent } from '../../models/iEvent';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  dropdownOpen: boolean = false;
  dropdownItem!: string;
  categoryName!: string | null;
  events: iEvent[] = [];
  luogo: string[] = [];
  nomeEvento!: string;
  subscriptions: Subscription = new Subscription();
  categoriesEvents!: iEvent[];
  searchNome!: string;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) {}

  //All'ngOnInit mi carica tutte le città comprese negli eventi esistendi e le inserisce nel dropdown "seleziona città per farne un filtro"
  //in piu prende il parametro 'tipo' e lo assegna al metodo  getEventsByTipe per poter filtrare gli eventi in base a quel tipo.

  ngOnInit(): void {
    this.loadAllCities();
    this.subscriptions = this.route.queryParams.subscribe((params) => {
      this.searchNome = params['tipo'] || null;
      this.dropdownItem="Seleziona città";
      this.nomeEvento = '';
      this.dropdownItem = '';
      this.eventService
         .getEventsByFilters(this.searchNome, this.dropdownItem, this.nomeEvento)
        .subscribe((data) => {
          this.events = data;
        });
    });
  }

  filterByNameOrCity() {
    this.eventService
      .getEventsByFilters(this.searchNome, this.dropdownItem, this.nomeEvento)
      .subscribe((data) => {
        this.events = data;
        console.log(this.events);
      });
  }

  loadAllCities(): void {
    this.eventService.getAllEvents().subscribe((events) => {
      this.luogo = events
        .map((event) => event.luogo.toString())
        .filter((value, index, self) => self.indexOf(value) === index);
    });
  }

  togglemenu() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  closeDropdown() {
    this.dropdownOpen = false;
  }
  moveToHeader(item: string) {
    this.dropdownItem = item;
    this.dropdownOpen = false;
  }
}
