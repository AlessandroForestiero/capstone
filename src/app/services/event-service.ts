import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iEvent } from '../models/iEvent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  apiUrl: string = 'http://localhost:8080/event';

  constructor(private http: HttpClient) {}
  getAllEvents(): Observable<iEvent[]> {
    return this.http.get<iEvent[]>(this.apiUrl);
  }
  getById(id: number): Observable<iEvent> {
    return this.http.get<iEvent>(this.apiUrl + `${id}`);
  }
  deleteEvent(id: number): Observable<iEvent> {
    return this.http.delete<iEvent>(this.apiUrl + `${id}`);
  }
  editEvent(event: iEvent): Observable<iEvent> {
    return this.http.put<iEvent>(this.apiUrl + `${event.id}`, event);
  }
  getEventsByName(nome: string|null): Observable<iEvent[]> {
    return this.http.get<iEvent[]>(this.apiUrl + `/name/${nome}` );
  }
  getEventsByType(category: string|null): Observable<iEvent[]> {
    return this.http.get<iEvent[]>(this.apiUrl + `/type/${category}` );
  }
  getEventsByFilters(tipo: string | null, nome: string | null): Observable<iEvent[]> {
    let params = new HttpParams();

    if (tipo) {
      params = params.set('tipo', tipo);
    }
    if (nome) {
      params = params.set('nome', nome);
    }

    return this.http.get<iEvent[]>(this.apiUrl +'/search/', { params });
  }
}

