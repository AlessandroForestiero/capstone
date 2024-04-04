export interface iTicket {
  id: number,
  code: string,
  eventId: number,
  userId:number,
  seatingAreaId: number,
  price: number,
  paymentDate:Date;
}
