import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports:[FontAwesomeModule]
})
export class HeaderComponent {
  navLinks = ['Home', 'About', 'Services', 'Obituaries', 'Contact'];
  faLocationDot = faLocationDot;
  faSquarePhoneFlip = faSquarePhoneFlip;
}
