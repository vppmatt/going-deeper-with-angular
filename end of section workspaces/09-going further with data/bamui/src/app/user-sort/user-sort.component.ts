import { Component } from '@angular/core';
import { SortOrderService } from '../sort-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sort',
  standalone: true,
  imports: [],
  templateUrl: './user-sort.component.html',
  styleUrl: './user-sort.component.css'
})
export class UserSortComponent  {

  constructor(private sortOrderService: SortOrderService, private router : Router ) { }

  handleClick(sortType: number) {
    //this.sortOrderService.handleClick(sortType);
    this.router.navigate(['/users'], {queryParams: {sortType: sortType}});
  }


}
