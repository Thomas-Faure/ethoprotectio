import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [SocketService]

})
export class AccueilComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  

  ngOnInit(): void {



  }


}
