import { OnInit, Component } from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Clara';
	public isMenuCollapsed = true;
  currentRoute!: string;

  

  constructor(private router: Router) {
    console.log(router.url);
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe(x => this.currentRoute=x.url)

  }

  public getCurrentRoute(str : string){
    return str == this.currentRoute;
  }
  ngOnInit(): void {
    
  }
}