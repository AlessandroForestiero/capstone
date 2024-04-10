export interface iTicket {
  id: number,
  eventId: number,
  userId:number,
  userName:string,
  eventName: string,
  seatingAreaName: string,
  seatingAreaId: number,
  price: number,
  code: number,
  paymentDate:Date;
  eventDate:Date;
}
