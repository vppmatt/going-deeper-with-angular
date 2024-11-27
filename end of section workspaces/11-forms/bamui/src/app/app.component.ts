import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'bamui';
  showSideMenu :boolean = true;

  navigating: boolean = false;

  constructor(private router: Router) {}
 
  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (this.router.url === '/users') {
        this.showSideMenu = true;
      } else {
        this.showSideMenu = false;
      }

      if (val instanceof NavigationStart) {
        this.navigating = true;
      } else if (val instanceof NavigationEnd) {
        this.navigating = false;
      }
    });
  }
  
}
