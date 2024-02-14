import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { store } from '../../interfaces/server';
import { Router, RouterModule } from '@angular/router'; // Para usar el routerLink

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [ApiService]
})
export class HeaderComponent {
  constructor(private apiService: ApiService, private router: Router) { }

  store = store;

  buscador: boolean = false;
  buscadorOn() {
    this.buscador = true;

  }

  buscadorOf() {
    this.buscador = false;
  }

  getApi() {
    this.apiService.get();
    this.goToSearch();
  }



  // Peliculas
  getMovies() {
    store.inputSearch = this.letraAleatoria;
    this.apiService.getMovies();
    store.inputSearch = '';
    this.buscador = false;
  }
  // Generar una letra aleatoria entre A y Z
  letraAleatoria: string = String.fromCharCode(65 + Math.floor(Math.random() * 26));


  // Series
  getSeries() {
    store.inputSearch = this.letraAleatoria;
    this.apiService.getSeries();
    store.inputSearch = '';
    this.buscador = false;
  }



  // Rutas
  goToSearch() {
    this.router.navigate(['/search']); // Me redirije el path hacia /search, el cual es una ruta ya creada
  }

  goToMovies() {
    this.router.navigate(['/peliculas']); // Me redirije el path hacia /search, el cual es una ruta ya creada
    this.getMovies();
    store.inputSearch = '';
  }

  goToSeries() {
    this.router.navigate(['/series']); // Me redirije el path hacia /search, el cual es una ruta ya creada
    this.getSeries();
    store.inputSearch = '';
  }

  goToWelcome() {
    this.router.navigate(['/']); // Me redirije el path hacia /search, el cual es una ruta ya creada
    this.buscadorOf();
    store.inputSearch = '';
  }

}
