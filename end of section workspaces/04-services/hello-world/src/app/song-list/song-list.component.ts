import { Component, inject, ViewChildren } from '@angular/core';
import { SongComponent } from '../song/song.component';
import { Song } from '../types/song';
import { NgFor } from '@angular/common';
import { DataService } from '../data.service';


@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [SongComponent, NgFor],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {

  dataService : DataService;

  constructor() {
    this.dataService= inject(DataService);
  }

  topScore = 0;



@ViewChildren(SongComponent) songComponents!: SongComponent[];

onVote(id: number) {
  console.log(id)
  this.dataService.songs[id].votes++;
  this.highlightTopSongs();
}

highlightTopSongs() {
  this.topScore = this.dataService.songs.map((song) => song.votes).sort((a, b) => b - a)[0];
 
}

replaceSong() {
  this.dataService.songs[0].title = "Deeper shade of blue";
}


}
