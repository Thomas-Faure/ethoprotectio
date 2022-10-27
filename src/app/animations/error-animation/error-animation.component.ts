import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-error-animation',
  template: `
<div class="container d-flex align-items-center justify-content-center" style="height: 100%">

  <ng-lottie [options]="options" (animationCreated)="animationCreated($event)" width="200px" height="200px"></ng-lottie>
      
</div>
  
`
})

export class ErrorAnimationComponent implements OnInit {

  options: AnimationOptions = {
    path: './assets/error.json',
    loop: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
