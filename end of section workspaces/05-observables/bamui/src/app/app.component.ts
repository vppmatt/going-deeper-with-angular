import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserSortComponent } from './user-sort/user-sort.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, UserSortComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bamui';

  //constructor(private sortOrderService: SortOrderService) { } 

  // @ViewChild("userSort")
  // userSort!: UserSortComponent;

  @ViewChild("userList")
  userList!: UserListComponent;

  // sortSubscription! : Subscription;

  // ngAfterViewInit(): void {    
  //     this.sortSubscription = this.sortOrderService.sortOrderEvents.subscribe(
  //       {next: (sortType : number) => this.handleSortEvent(sortType),
  //        error: (error: string) => console.log('Error: ', error),
  //        complete: () => console.log('Complete')
  //       }
  //     );
  // }

  // ngOnDestroy(): void {
  //     this.sortSubscription!.unsubscribe();
  // }

  // handleSortEvent(sortType: number) {
  //   this.userList.changeSortOrder(sortType);
  // }

}
