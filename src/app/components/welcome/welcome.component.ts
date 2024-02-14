import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Para usar el routerLink
import { store } from '../../interfaces/server';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  constructor(private apiService:ApiService, private router:Router){}
  store = store;

  goToSearch() {
    this.router.navigate(['/search']); // Me redirije el path hacia /search, el cual es una ruta ya creada
  }
  getApi() {
    this.apiService.get();
    this.goToSearch();
  }
}
