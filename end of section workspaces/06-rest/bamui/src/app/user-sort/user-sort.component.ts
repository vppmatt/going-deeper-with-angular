import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortOrderService } from '../sort-order.service';

@Component({
  selector: 'app-user-sort',
  standalone: true,
  imports: [],
  templateUrl: './user-sort.component.html',
  styleUrl: './user-sort.component.css'
})
export class UserSortComponent {

  constructor(private sortOrderService: SortOrderService) { }

  handleClick(sortType: number) {
    this.sortOrderService.handleClick(sortType);
  }

  // @Output()
  // public sortEvent : EventEmitter<number> = new EventEmitter<number>();

  // handleClick(sortType : number) {
  //   if (sortType < 1) {
  //     this.sortEvent.complete();
  //   }
  //   if (sortType > 3) {
  //     this.sortEvent.error('Invalid sort type');
  //   }
  //   this.sortEvent.emit(sortType);
  // }

}
