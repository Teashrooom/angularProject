import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    { question: 'Why have a funeral?', answer: 'Funerals help us celebrate and remember loved ones.' },
    { question: 'What does a Funeral Director do?', answer: 'They coordinate and manage the funeral arrangements.' },
    { question: 'What to do when a death occurs?', answer: 'Contact your funeral director and begin making arrangements.' },
    { question: 'Should I choose burial or cremation?', answer: 'This is a personal decision, often based on tradition and belief.' }
  ];
}
