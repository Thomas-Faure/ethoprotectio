import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  constructor() { }

  backgroundImages : any;
  backgroundImage! : string;
  compteur! : number;
  imageOpacity! : number;
  ngOnInit(): void {
    this.compteur = 50000;
    this.imageOpacity = 1;
    this.backgroundImage = "./assets/Image1.png";

  }

  styleObject(): Object {

        return {'background-image': 'url('+this.backgroundImage+')','opacity': this.imageOpacity}
}

}
