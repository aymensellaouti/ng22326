import { Component, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from "../cv-list/cv-list";
import { CvCard } from "../cv-card/cv-card";

@Component({
  selector: 'app-cv-page',
  imports: [CvList, CvCard],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
})
export class CvPage {
  /**
   * var la liste des cvs à afficher
   */
  cvs = signal<Cv[]>([
    new Cv(1, 'Kherfani', 'Yassmine', 'Dev', '12345678', 'rotating_card_profile.png', 20),
    new Cv(2, 'Abassi', 'Oussama', 'Dev', '12345677', 'rotating_card_profile2.png', 20),
    new Cv(3, 'Ben Younes', 'Cherif', 'Dev', '12345679', 'rotating_card_profile3.png', 20),
  ]);
  /**
   * var le cv séléctionné
   */
  selectedCv = signal<Cv | null>(null);
}
