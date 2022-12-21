import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],

})
export class AccueilComponent implements OnInit {

  constructor() { }



  backgroundImages: any;
  backgroundImage!: string;
  compteur!: number;
  apparition!: boolean
  imageOpacity!: number;
  index!: number;
  ngOnInit(): void {

    this.compteur = 15000;
    this.apparition = true;
    this.imageOpacity = 1;
    this.index = 0;
    this.backgroundImage = "./assets/parallax/parallax1.jpg";
    this.backgroundImages = ["./assets/parallax/parallax1.jpg", "./assets/parallax/parallax2.jpg", "./assets/parallax/parallax3.jpg", "./assets/parallax/parallax4.jpg", "./assets/parallax/parallax5.jpg", "./assets/parallax/parallax6.jpg"];
    const interval = setInterval(() => {

      if (this.compteur == 15000) {
        if (this.apparition) {
          this.imageOpacity = 0;
          if( this.index == this.backgroundImages.length)
            this.index = 0;
          this.backgroundImage = this.backgroundImages[ this.index];
          this.index++;
        }
      }
      this.compteur -= 100;
      if(this.apparition){
        if (this.imageOpacity != 1)
          this.imageOpacity += 0.01;
      }else{
        if (this.imageOpacity != 0)
        this.imageOpacity -= 0.01;
      }
      if (this.compteur == 0) {
        this.apparition = !this.apparition;
        this.compteur = 15000;
      }
    }, 10);
  }


}
