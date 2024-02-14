import { Component } from '@angular/core';
import { store } from '../../interfaces/server';
import { NgFor, NgIf } from '@angular/common';
import { CardsComponent } from '../cards/cards.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor, NgIf, CardsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  store = store;
  imgUrl = 'https://image.tmdb.org/t/p/w342';
  mostrarArray() {
    console.log(store.seriesArray);
  }

}
