import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  modal:boolean =false;

  constructor() { }

  abrilModal(){
    this.modal=true;
  }
  cerrarModal(){
    this.modal=false;
  }
}
