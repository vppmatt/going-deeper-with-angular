import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SongListComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  
  @ViewChild("user") 
  user!: UserComponent;
  
  ngAfterViewInit(): void {
    console.log("user component exists in app component", this.user)
    //this.user.role="superuser";
  }

  title : string = 'hello-world';
  name : string= 'Matt';
  counter : number = 0;
  imageUrl="/neueda.png";
  imageAlt="Neueda Logo";

  changeUser() {
     this.name = "Matthew";
  }

  ngOnInit() {
    this.title = "My Application";
  }

  onButtonClick() {
    this.counter++;
  }

}
