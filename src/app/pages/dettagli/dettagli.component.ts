import { iSeatingAreaOption } from './../../models/iSeatingAreaOption';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iEvent } from '../../models/iEvent';
import { iSeatingArea } from '../../models/iSeatingArea';
import { SeatService } from '../../services/seating-area-service';
import { iCart } from '../../models/iCart';
import { AuthService } from '../../services/auth.service';
import { TransactionService } from '../../services/transaction.service';
import { iTicket } from '../../models/i-ticket';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss'],
})
export class DettagliComponent implements OnInit {
  event!: iEvent;
  seatingAreaDetails!: iSeatingArea;
  seatingArea: iSeatingArea[] = [];
  cart!: iCart;
  dropdownOpen: boolean = false;
  dropdownItem!: string;
  seatingAreaOptions: iSeatingAreaOption[] = [];
  seatingAreaId!: number;
  numTickets: number = 1;
  userId!: number | undefined;
  ticket!: iTicket;
  constructor(
    private router:Router,
    private seatService: SeatService,
    private authSvc: AuthService,
    private transactionSvc: TransactionService
  ) {}

  ngOnInit(): void {
    this.event = history.state.event;
    console.log(this.event);
    this.getSeatingAreasByEventId();
    this.getCurrentUserId();
  }
  getSeatingAreasByEventId() {
    this.seatService
      .getSeatingAreaByEventId(this.event.id)
      .subscribe((data) => {
        this.seatingArea = data;
        this.seatingAreaOptions = this.seatingArea.map((seatingArea) => ({
          id: seatingArea.id,
          name: seatingArea.name,
        }));
        console.log(this.seatingAreaOptions);
      });
  }
  getCurrentUserId() {
    return this.authSvc.user$.subscribe((user) => (this.userId = user?.userId));
  }
  getSeatingAresaDeatilsById() {
    this.seatService
      .getSeatingAreaById(this.seatingAreaId)
      .subscribe((data) => {
        this.seatingAreaDetails = data;
        console.log(this.seatingAreaDetails);
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
  onSeatSelected(seatingAreaId: number) {
    this.seatingAreaId = seatingAreaId;
    this.getSeatingAresaDeatilsById();
  }

  cartObj() {
    this.cart = {
      userId: this.userId as number,
      seatingAreaId: this.seatingAreaId,
      eventId: this.event.id,
      ticketsNumber: this.numTickets,
    };
    console.log(this.cart);
  }
  createTicket() {
    this.transactionSvc.createTicket(this.cart).subscribe(
      (data) => {
        this.ticket = data;
        alert("Grazie per l'acquisto");
        this.router.navigate(['user_tickets']);
      },
      (error) => {
        alert("Per continuare con l'acquisto devi essere loggato");
        this.router.navigate(['login'])
      }
    );
  }

}
