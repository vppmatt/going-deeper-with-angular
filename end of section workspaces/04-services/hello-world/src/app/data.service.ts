import { Injectable } from '@angular/core';
import { Song } from './types/song';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  songs : Song[] = [{id: 0, title: "5,6,7,8", artist: "Steps", votes: 0, 
    dateReleased: new Date(1997, 11, 7), price: 11.99},
           {id: 1, title: "You raise me up", artist: "Westlife", votes: 0,
            dateReleased: new Date(2005, 10, 24), price: 8.99
           },
           {id: 2, title: "Livin' La Vida Loca", artist: "Ricky Martin", votes: 0,
              dateReleased: new Date(1999, 3, 23), price: 21.99
           }
  ];

  increaseSongPrice() {
    this.songs.forEach(song => song.price += 1);
  }
}
