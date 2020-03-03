import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;

  constructor() {
    this.socket = io('http://localhost:3000');
   }

   listen(Eventname: string){
     return new Observable((Subscriber) => {
     this.socket.on(Eventname, (data) => {
       Subscriber.next(data);
     })

     })
   }
}
