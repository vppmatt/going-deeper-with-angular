import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { UserSortComponent } from '../user-sort/user-sort.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [UserListComponent, UserSortComponent, RouterModule ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
