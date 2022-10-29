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
    this.imageOpacity = 0;
    this.backgroundImage = "./assets/image1.jpg";
    this.backgroundImages = ["./assets/image1.jpg","./assets/image2.jpg"];
    const interval = setInterval(() =>{ //
     
      if(this.compteur ==50000){
        this.imageOpacity = 0;
         var choixImage = this.backgroundImages.filter((x : string) =>x != this.backgroundImage);
         this.backgroundImage = choixImage[Math.floor(Math.random() * (choixImage.length-1))]
      }
      this.compteur-=100;
      if(this.imageOpacity != 1)
        this.imageOpacity+=0.01;
      if(this.compteur == 0){
      this.compteur = 50000;
      }
    }, 10);
  }

  styleObject(): Object {

        return {'background-image': 'url('+this.backgroundImage+')','opacity': this.imageOpacity}
}

}
