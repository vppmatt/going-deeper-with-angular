import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminRouteGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    if (this.loginService.isLoggedIn && this.loginService.role === "ROLE_admin") {
      return true;
    }
    this.router.navigate(['noaccess']);
    return false;
  } 
}
