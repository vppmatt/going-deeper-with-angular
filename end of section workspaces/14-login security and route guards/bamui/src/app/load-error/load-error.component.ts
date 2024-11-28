import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-error',
  standalone: true,
  imports: [],
  templateUrl: './load-error.component.html',
  styleUrl: './load-error.component.css'
})
export class LoadErrorComponent implements OnInit {

  constructor(private loginService : LoginService, private dataService : DataService,
    private router : Router) {}

  ngOnInit() {
    if (!this.loginService.isLoggedIn) {
      this.router.navigate(["/login"]);
      return;
    }
    console.log("got to the load error component... refresh state is" + this.loginService.refreshState);
    if (this.loginService.refreshState === 0) {
      this.loginService.refreshState = 1;
      this.dataService.refreshJwtToken().subscribe( {
        next : () => {
          console.log("got a valid refresh token so trying again...");
          this.loginService.refreshState = 0;
          this.router.navigate(["/users"]);
          return;
        },
        error :error => {
          console.log("didn't get a valid refresh so staying here...")
          console.log(error);
          this.loginService.refreshState = 2;
        }
      });
    }
  }

}
