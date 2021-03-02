import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  sintomas = [
    'Febre',
    'Dor de cabeça',
    'Fraqueza',
    'Dor de garganta',
    'Desinteria',
    'Tosse',
    'Tontura',
  ];

  constructor() {}
}
