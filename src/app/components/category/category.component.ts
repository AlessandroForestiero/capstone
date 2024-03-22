import { Subscription, catchError } from 'rxjs';
import { EventService } from './../../services/event-service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iEvent } from '../../models/iEvent';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  dropdownOpen: boolean = false;
  dropdownItem!:string;
  categoryName!: string | null;
  events: iEvent[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.loadCategoryEvents();
  }

  loadCategoryEvents() {
    this.eventService.getEventsByFilters("SPORT",null).subscribe((events) => {
      this.events = events;
    });
  }
 togglemenu(){
   this.dropdownOpen =!this.dropdownOpen;
 }
 moveToHeader(item:string){
  this.dropdownItem = item;
  this.dropdownOpen = false;

 }



//   private fetchEvents(): void {
//     if (!this.categoryName) {
//       console.log('ciao');
//     } else {
//       this.subscriptions.add(
//         this.eventService
//           .getEventsByFilter()
//           .pipe(
//             catchError((error) => {
//               console.log(error);
//               return [];
//             })
//           )
//           .subscribe((data) => {
//             this.events = data;
//           })
//       );
//     }
//   }

//   ngOnDestroy(): void {
//     this.subscriptions.unsubscribe();
//   }
// }
// function loadCategoryEvents() {
//   throw new Error('Function not implemented.');
}
