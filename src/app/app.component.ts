import { OnInit, Component,AfterViewInit } from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute} from '@angular/router';
import { filter } from 'rxjs/operators';
import { HttpParameterCodec } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Claire';
	public isMenuCollapsed = true;
  currentRoute!: string;
  constructor(private router: Router,private route: ActivatedRoute) {
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe(x => this.currentRoute=x.url)

  }

  forceNavigate(name: string) {
    this.router.navigate(['/connaitre'], { fragment: name });
  }


  public myEncodeURIComponent(text: string): string {
    return encodeURI(text);
  }

  public getCurrentRoute(str : string){
    return str == this.currentRoute;
  }
  ngOnInit(): void {

  }

}