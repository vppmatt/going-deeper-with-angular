import { Component, ViewChild, ViewChildren } from '@angular/core';
import { SongComponent } from '../song/song.component';
import { Song } from '../types/song';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [SongComponent, NgFor],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {

songs : Song[] = [{id: 0, title: "5,6,7,8", artist: "Steps", votes: 0, 
  dateReleased: new Date(1997, 11, 7), price: 11.99},
         {id: 1, title: "You raise me up", artist: "Westlife", votes: 0,
          dateReleased: new Date(2005, 10, 24), price: 8.99
         },
         {id: 2, title: "Livin' La Vida Loca", artist: "Ricky Martin", votes: 0,
            dateReleased: new Date(1999, 3, 23), price: 21.99
         }
];

@ViewChildren(SongComponent) songComponents!: SongComponent[];

onVote(id: number) {
  console.log(id)
  this.songs[id].votes++;
  this.highlightTopSongs();
}

highlightTopSongs() {
  const topScore = this.songs.map((song) => song.votes).sort((a, b) => b - a)[0];
  this.songComponents.forEach((songComponent) => {
    songComponent.isTopSong = songComponent.song.votes === topScore;
  });
  
}

}
