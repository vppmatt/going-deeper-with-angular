import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  constructor(private dataService : DataService) {}

  totalPrice: number = 0;

  ngOnInit() {
    this.calcTotal();
  }

  calcTotal() {
    this.totalPrice = this.dataService.songs.reduce((acc, song) => acc + song.price, 0);
  }

  increasePrice() {
    this.dataService.increaseSongPrice();
    this.calcTotal();
  }

}
