import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortOrderService {

  private _sortOrderEvents : Subject<number> = new Subject<number>();

  public get sortOrderEvents() : Observable<number> {
    return this._sortOrderEvents.asObservable();
  }

  handleClick(sortType : number) {
    if (sortType < 1) {
      this._sortOrderEvents.complete();
    }
    if (sortType > 3) {
      this._sortOrderEvents.error('Invalid sort type');
    }
    this._sortOrderEvents.next(sortType);
  }


}
