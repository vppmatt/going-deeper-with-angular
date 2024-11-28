import { EventEmitter, Injectable, Output } from '@angular/core';
import { LoginResponse } from './model/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  @Output()
  loginEvent = new EventEmitter<boolean>();

  loginResponse : LoginResponse = {jwt: "", refreshJwt : ""};
  isLoggedIn = false;
  user = "";
  role = "";

  refreshState = 0;

  constructor() {
    const jwt = localStorage.getItem("jwt");
    const refreshJwt = localStorage.getItem("refreshJwt");
    if (jwt && refreshJwt) {
      this.login({jwt, refreshJwt});
    }
  }

  login(response : LoginResponse) { 
    this.loginResponse = response;
    const parts = response.jwt.split(".");
    const payload = JSON.parse(atob(parts[1]));
    this.user = payload.sub;
    this.role = payload.role;
    this.isLoggedIn = true;
    console.log("emit true");
    this.loginEvent.emit(true);
    localStorage.setItem("jwt", response.jwt);
    localStorage.setItem("refreshJwt", response.refreshJwt);
    this.refreshState = 0;
  }

  logout() {
    this.isLoggedIn = false;
    this.loginResponse = {jwt: "", refreshJwt : ""};
    this.user="";
    this.role="";
    this.loginEvent.emit(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshJwt");
  }

}
