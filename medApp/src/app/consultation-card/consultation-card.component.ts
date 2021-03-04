import { Component, Input, OnInit } from '@angular/core';
import { Consultation } from '../tab1/consultation.model';

@Component({
  selector: 'app-consultation-card',
  templateUrl: './consultation-card.component.html',
  styleUrls: ['./consultation-card.component.scss'],
})
export class ConsultationCardComponent implements OnInit {
  @Input() consultationItem: Consultation;

  constructor() {}

  ngOnInit() {}
}
