import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iEvent } from '../../models/iEvent';
import { iSeatingArea } from '../../models/iSeatingArea';
import { SeatService } from '../../services/seating-area-service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss'],
})
export class DettagliComponent implements OnInit {
  event!: iEvent;
  seatingArea!: iSeatingArea[];

  constructor(
    private route: ActivatedRoute,
    private seatService: SeatService
  ) {}

  ngOnInit(): void {
    this.event = history.state.event;
    console.log(this.event);
    this.getSeatingAreasByEventId()
  }
  getSeatingAreasByEventId() {
    this.seatService.getSeatingAreaByEventId(this.event.id).subscribe((data) => {
      this.seatingArea = data;
      console.log(this.seatingArea);
    });
  }

}
