import { TipoEvento } from "./tipo-evento";

export interface iEvent {
  id:number,
  nome:String ;
  luogo:String ;
  dataEvento:string ;
  dataFineAcquisti:string ;
  tipoEvento:TipoEvento;
  immagine:String ;
  descrizione:String ;
}
