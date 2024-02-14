import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CardsComponent } from '../cards/cards.component';
import { NgFor, NgIf } from '@angular/common';
import { store } from '../../interfaces/server';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CardsComponent, NgFor, FormsModule, NgIf],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  constructor(private apiService: ApiService) { }
  store = store;
  imgUrl = 'https://image.tmdb.org/t/p/w342';


  getMovies() {
    this.apiService.getMovies();
  }
}
