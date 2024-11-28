import { Injectable } from '@angular/core';
import { User } from './model/User';
import { catchError, map, Observable, of } from 'rxjs';
import { Resolve, Router } from '@angular/router';
import { DataService } from './data.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserPrefetchService implements Resolve<Observable<User[]>> {

  constructor(private dataService: DataService, private router : Router) { }
    
    resolve() {
      return this.dataService.getUsers().pipe(map( data => data), catchError( error => { 
        console.log("Error loading users: ", error);
        this.router.navigate(['/loaderror']);
        return of([]);
       }));  
      }
}
