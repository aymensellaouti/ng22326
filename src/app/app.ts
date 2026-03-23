import { Component, signal } from '@angular/core';

import { Card } from './components/card/card';
import { Counter } from "./signal/counter/counter";

@Component({
  selector: 'app-root',
  imports: [Card, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng22326');
}
