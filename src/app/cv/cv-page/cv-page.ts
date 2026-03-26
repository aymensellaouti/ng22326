import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from "../cv-list/cv-list";
import { CvCard } from "../cv-card/cv-card";
import { DatePipe } from '@angular/common';
import { LoggerService } from '../../services/logger';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from "../embauche/embauche.component";

@Component({
  selector: 'app-cv-page',
  imports: [CvList, CvCard, DatePipe, EmbaucheComponent],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
})
export class CvPage {
  cvService = inject(CvService);
  /**
   * var la liste des cvs à afficher
   */
  cvs = signal<Cv[]>([]);
  /**
   * var le cv séléctionné
   */
  selectedCv = this.cvService.selectedCv;
  today = new Date();
  loggerService = inject(LoggerService);
  toastr = inject(ToastrService);
  constructor() {
    this.loggerService.log('cc je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech !');

    this.cvService.getCvsFromApi().subscribe({
      next:(cvs) => {
        this.cvs.set(cvs);
      },
      error:(error) => {
        this.cvs.set(this.cvService.getCvs()());
        this.toastr.error(`Les données sont fictives merci de contacter l'admin`)
      },
      complete:() => {},
    })
  }
}
