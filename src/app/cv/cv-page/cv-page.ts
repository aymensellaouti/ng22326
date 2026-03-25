import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from "../cv-list/cv-list";
import { CvCard } from "../cv-card/cv-card";
import { DatePipe } from '@angular/common';
import { LoggerService } from '../../services/logger';

@Component({
  selector: 'app-cv-page',
  imports: [CvList, CvCard, DatePipe],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
})
export class CvPage {
  /**
   * var la liste des cvs à afficher
   */
  cvs = signal<Cv[]>([
    new Cv(1, 'Kherfani', 'Yassmine', 'Dev', '12345678', 'rotating_card_profile.png', 20),
    new Cv(2, 'Abassi', 'Oussama', 'Dev', '12345677', '', 20),
    new Cv(3, 'Ben Younes', 'Cherif', 'Dev', '12345679', '             ', 20),
  ]);
  /**
   * var le cv séléctionné
   */
  selectedCv = signal<Cv | null>(null);
  today = new Date();
  loggerService = inject(LoggerService);
  constructor() {
    this.loggerService.log('cc je suis le cvComponent')
  }
}
