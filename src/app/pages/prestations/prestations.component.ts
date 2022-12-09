import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.css']
})
export class PrestationsComponent implements OnInit {

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
    this.backgroundImage = "./assets/effarouchements/img1.jpg";
    this.backgroundImages = ["./assets/effarouchements/img1.jpg", "./assets/effarouchements/img2.jpg","./assets/effarouchements/img3.jpg","./assets/effarouchements/img4.jpg","./assets/effarouchements/img5.jpg","./assets/effarouchements/img6.jpg","./assets/effarouchements/img7.jpg","./assets/effarouchements/img8.jpg"];
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
