import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../login.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit, OnDestroy {

  isLoggedIn = false;
  
  //@ts-expect-error(won't be null as set in ngOnInit)
  subscription : Subscription = null;

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
      this.isLoggedIn = this.loginService.isLoggedIn;
      this.subscription = this.loginService.loginEvent.subscribe( value => {
        this.isLoggedIn = value;
      });
  }

  logout() {
    this.loginService.logout();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
