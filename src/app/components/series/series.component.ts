import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CardsComponent } from '../cards/cards.component';
import { NgFor, NgIf } from '@angular/common';
import { store } from '../../interfaces/server';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-series',
  standalone: true,
  imports: [NgFor,CardsComponent, FormsModule, NgIf],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  constructor(private apiService: ApiService) { }
  store = store;
  imgUrl = 'https://image.tmdb.org/t/p/w342';

  getSeries() {
    this.apiService.getSeries();
  }
}
