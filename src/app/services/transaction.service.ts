import { iTicket } from './../models/i-ticket';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iCart } from '../models/iCart';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  apiUrl: string = 'http://localhost:8080/purchase';
  ticketUrl: string = 'http://localhost:8080/tickets';
  constructor(private http: HttpClient) {}

  createTicket(data:iCart):Observable<iTicket>{
    return this.http.post<iTicket>(this.apiUrl,data);
  }

 getTicketByUser(userId:number):Observable<iTicket[]>{
   return this.http.get<iTicket[]>(`${this.ticketUrl}/${userId}`);
 }

}
