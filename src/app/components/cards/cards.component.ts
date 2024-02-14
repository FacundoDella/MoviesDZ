import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() name!: string;
  @Input() description!: string;
  @Input() lenguaje!: string;
  @Input() imagen!: string;
  @Input() fecha!: string;


  
  truncateDescription(text: string, limit: number): string {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  }
}
