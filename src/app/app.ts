import { Component, signal } from '@angular/core';

import { Pere } from './compoInteractions/pere/pere';

@Component({
  selector: 'app-root',
  imports: [Pere],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng22326');
}
