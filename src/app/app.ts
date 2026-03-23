import { Component, signal } from '@angular/core';

import { Card } from './components/card/card';
import { Counter } from "./signal/counter/counter";
import { Color } from "./components/color/color";

@Component({
  selector: 'app-root',
  imports: [Color],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng22326');
}
