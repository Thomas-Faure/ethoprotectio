
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable()
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:5000');
  }

  gift() {
    return new Observable(observer => {
      this.socket.on('gift', (sortie: unknown) => {
        observer.next(sortie);
      });
    });
  }
  comment() {
    return new Observable(observer => {
      this.socket.on('comment', (sortie: unknown) => {
        observer.next(sortie);
      });
    });
  }
}
