import { OnInit, Component,AfterViewInit } from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-connaitre',
  templateUrl: './connaitre.component.html',
  styleUrls: ['./connaitre.component.css']
})
export class ConnaitreComponent implements OnInit {

  fragment !: string;
  constructor(private route: ActivatedRoute) { }
  public myEncodeURIComponent(text: string): string {
    return encodeURI(text);
  }

  ngOnInit(): void {
    this.fragment = "";
    this.route.fragment.subscribe(fragment => { this.fragment = fragment!; });

  }

  ngAfterViewInit(): void {

  }
  ngAfterViewChecked(): void {
    try {
        if(this.fragment) {
        
        }
    } catch (e) { }
  }

}
