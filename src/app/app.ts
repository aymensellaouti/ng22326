import { Component, signal } from '@angular/core';

import { CvPage } from "./cv/cv-page/cv-page";
import { NgStyleComponet } from "./directives/ng-style/ng-style";
import { CvItem } from "./cv/cv-item/cv-item";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";

@Component({
  selector: 'app-root',
  imports: [CvPage, NgStyleComponet, CvItem, MiniWordComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng22326');
}
