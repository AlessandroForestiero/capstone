import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iSeatingArea } from '../models/iSeatingArea';

@Injectable({
  providedIn: 'root',
})
export class SeatService {
  apiUrl: string = 'http://localhost:8080/seating_area';

  constructor(private http: HttpClient) {}
  getSeatingAreaByEventId(id: number): Observable<iSeatingArea[]> {
    return this.http.get<iSeatingArea[]>(
      this.apiUrl + '/event/' + `${id}`
    );
  }
  getSeatingAreaById(id: number): Observable<iSeatingArea> {
    return this.http.get<iSeatingArea>(
      this.apiUrl +'/' + `${id}`
    );
  }
}
