import { Component, signal } from '@angular/core';

import { Card } from './components/card/card';
import { Counter } from "./signal/counter/counter";
import { Color } from "./components/color/color";
import { Som } from "./signal/som/som";
import { TtcComponent } from "./signal/ttc/ttc.component";

@Component({
  selector: 'app-root',
  imports: [Color, Som, TtcComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng22326');
}
