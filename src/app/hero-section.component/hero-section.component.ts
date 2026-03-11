import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  imports:[FontAwesomeModule]
})
export class HeroSectionComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faShoppingCart = faShoppingCart;
}
