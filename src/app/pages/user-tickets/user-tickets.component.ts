import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { AuthService } from '../../services/auth.service';
import { iTicket } from '../../models/i-ticket';

@Component({
  selector: 'app-user-tickets',
  templateUrl: './user-tickets.component.html',
  styleUrls: ['./user-tickets.component.scss']
})
export class UserTicketsComponent implements OnInit  {
  userId!: number | undefined;
  tickets: iTicket[] = []; // Inizializzazione come array vuoto
  constructor(private transactionSvc: TransactionService, private authSvc: AuthService) {}

  ngOnInit(): void {
    this.authSvc.user$.subscribe(user => {
      this.userId = user?.userId;

      if (this.userId) {
        this.transactionSvc.getTicketByUser(this.userId).subscribe(tickets => {
          this.tickets = tickets;
          console.log(this.tickets);
        });
      }
    });
  }
}
