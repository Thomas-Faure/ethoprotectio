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
  ngOnInit(): void {
    this.compteur = 15000;
    this.apparition = true;
    this.imageOpacity = 1;
    this.backgroundImage = "./assets/parallax1.jpg";
    this.backgroundImages = ["./assets/parallax1.jpg", "./assets/parallax2.jpg", "./assets/parallax3.jpg", "./assets/parallax4.jpg", "./assets/parallax5.jpg", "./assets/parallax6.jpg"];
    const interval = setInterval(() => {

      if (this.compteur == 15000) {
        if (this.apparition) {
          this.imageOpacity = 0;
          var choixImage = this.backgroundImages.filter((x: string) => x != this.backgroundImage);
          this.backgroundImage = choixImage[Math.floor(Math.random() * (choixImage.length - 1))]
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
