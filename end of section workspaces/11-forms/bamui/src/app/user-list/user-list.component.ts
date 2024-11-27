import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../model/User';
import { NgFor, NgIf } from '@angular/common';
import { SortOrderService } from '../sort-order.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, OnDestroy {

  constructor(private dataService: DataService, private sortOrderService: SortOrderService, 
    private route: ActivatedRoute) {}

  users: Array<User> = [];

  sortOrderSubscription!: Subscription;

  displayMessage : string = "please wait... loading users";
  displayClass : string = "alert alert-info";

  sortType : number = 1;

  checkForSortTypeInUrl() {
      this.route.queryParams.subscribe(params => {
        if(params["sortType"]) {
          this.sortType = +params["sortType"];
          this.changeSortOrder();
        }
      });
  }


  ngOnInit() {
    this.users = this.route.snapshot.data['users'];
    this.checkForSortTypeInUrl();
    this.displayClass = "d-none";
    this.displayMessage = "";
    
    this.sortOrderSubscription = this.sortOrderService.sortOrderEvents
      .subscribe(sortType => {
        this.sortType = sortType;
        this.changeSortOrder()});
      //note we ignore errors and complete here as we don't want to do anything when these occur
  }

  ngOnDestroy() {
    this.sortOrderSubscription!.unsubscribe(); 
  }

  changeSortOrder() {
    console.log("changeSortOrder", this.sortType);
    this.users.sort((a, b) => {
      if (this.sortType === 1) {
        return a.id - b.id;
      } else if (this.sortType === 2) {
        return a.firstname.localeCompare(b.firstname);
      } else {
        return a.surname.localeCompare(b.surname);
      }
  })};



}
