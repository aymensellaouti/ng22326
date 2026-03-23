import { Component, signal } from '@angular/core';
import { First } from "./components/first/first";
import { Second } from "./components/second/second";
import { Color } from "./components/color/color";
import { Two } from "./components/two/two";

@Component({
  selector: 'app-root',
  imports: [First, Second, Color, Two],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng22326');
}
