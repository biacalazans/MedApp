import { Component } from '@angular/core';
import { Consultation } from './consultation.model';
import { Sintoma } from './sintoma.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  selectFirst: boolean = false;

  sintomas: Sintoma[] = [
    {
      id: '1',
      name: 'Febre',
      selected: false,
    },
    {
      id: '2',
      name: 'Tosse',
      selected: false,
    },
    {
      id: '3',
      name: 'Tontura',
      selected: false,
    },
    {
      id: '4',
      name: 'Dor de cabeça',
      selected: false,
    },
    {
      id: '5',
      name: 'Fraqueza',
      selected: false,
    },
    {
      id: '6',
      name: 'Dor de garganta',
      selected: false,
    },
    {
      id: '7',
      name: 'Desinteria',
      selected: false,
    },
  ];

  consultations: Consultation[] = [
    {
      doctor: 'Dra. Beatriz Calazans',
      area: 'Psiquiatra',
      date: '20 Nov 2020',
      time: '12:00 - 13:00',
      imageUrl: 'https://i.stack.imgur.com/l60Hf.png',
    },
    {
      doctor: 'Dra. Maria Antônia',
      area: 'Cardiologista',
      date: '25 Nov 2020',
      time: '09:00 - 11:00',
      imageUrl: 'https://i.stack.imgur.com/l60Hf.png',
    },
    {
      doctor: 'Dr. Davi Costa',
      area: 'Ortopedista',
      date: '10 Dez 2020',
      time: '09:00 - 11:00',
      imageUrl: 'https://i.stack.imgur.com/l60Hf.png',
    },
  ];

  selectedSintomas: Sintoma[] = [];

  selectSintoma(value: Sintoma) {
    var chip: any = document.getElementById(value.id);

    if (!value.selected) {
      if (!this.selectFirst) {
        var div: any = document.getElementById('selectedSintomas');
        div.style.height = '400';

        this.selectFirst = true;
      }
      this.selectedSintomas.push(value);
      chip.color = 'primary';
      value.selected = true;
    } else {
      var fitredSintomas = this.selectedSintomas.filter((filtredValue) => {
        return filtredValue !== value;
      });
      this.selectedSintomas = fitredSintomas;
      chip.color = 'medium';
      value.selected = false;
    }
  }

  deleteSintoma(value: Sintoma) {
    var chip: any = document.getElementById(value.id);
    var fitredSintomas = this.selectedSintomas.filter((filtredValue) => {
      return filtredValue !== value;
    });
    this.selectedSintomas = fitredSintomas;
    chip.color = 'medium';
    value.selected = false;
  }

  constructor() {}
}
