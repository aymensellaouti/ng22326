import { Component, signal } from '@angular/core';

import { CvPage } from "./cv/cv-page/cv-page";

@Component({
  selector: 'app-root',
  imports: [CvPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng22326');
}
