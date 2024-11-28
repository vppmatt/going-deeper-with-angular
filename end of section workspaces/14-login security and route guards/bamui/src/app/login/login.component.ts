import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private dataService: DataService, private loginService : LoginService,
    private router: Router) { }

  message = "";

  loginData : {username: string, password: string} = {username: "", password: ""};

  formIsValid = false;
  
  checkFormValidity() {
    this.formIsValid = this.loginData.username.length > 0 && this.loginData.password.length > 0;
  }

  handleSubmit() {
    this.message="logging in...";
    this.dataService.login(this.loginData).subscribe( {next : response => {
      this.loginService.login(response);
      this.message = "";
      this.router.navigate(['/']);
    }, error : () => {
      this.message = "Login failed - try again";  
    }
  });
  }


}
