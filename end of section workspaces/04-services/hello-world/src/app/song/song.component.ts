import { Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Song } from '../types/song';
import { NgIf, NgStyle } from '@angular/common';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [NgIf, NgStyle, CurrencyPipe, DatePipe],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent implements OnChanges, DoCheck {
  ngDoCheck(): void {
    console.log("checking for changes", this.song);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("something has changed", changes)
  }

  @Input({required: true}) song!: Song;
  
  @Input() isTopSong : boolean = false;

  @Output()
  voteUp = new EventEmitter<number>();
  
  clickVoteUp() {
    this.voteUp.emit(this.song.id);
  }
}
