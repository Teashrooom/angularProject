import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header.component/header.component';
import { FaqComponent } from './faq.component/faq.component';
import { HeroSectionComponent } from './hero-section.component/hero-section.component';
import { AboutComponent } from './about.component/about.component';
import { ServicesComponent } from './services.component/services.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FaqComponent, HeroSectionComponent, AboutComponent, ServicesComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularprojekt');
}
