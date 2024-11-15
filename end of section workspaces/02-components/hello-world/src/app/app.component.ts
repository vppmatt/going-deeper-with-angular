import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SongListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title : string = 'hello-world';
  readonly name : string= 'Matt';
  counter : number = 0;
  imageUrl="/neueda.png";
  imageAlt="Neueda Logo";

  ngOnInit() {
    this.title = "My Application";
  }

  onButtonClick() {
    this.counter++;
  }

}
