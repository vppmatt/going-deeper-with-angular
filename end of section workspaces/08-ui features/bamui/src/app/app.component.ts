import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'bamui';
  showSideMenu :boolean = true;

  constructor(private router: Router) {}
 
  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (this.router.url === '/users') {
        this.showSideMenu = true;
      } else {
        this.showSideMenu = false;
      }
    });
  }
  
}
