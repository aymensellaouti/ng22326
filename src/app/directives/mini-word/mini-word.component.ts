import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from "../highlight";
import { HighlightNew } from "../highlight-new";

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
  imports: [FormsModule, Highlight, HighlightNew]
})
export class MiniWordComponent {
  // Définition state
  color = signal('#0b354a');
  font = signal('garamond');
  size = signal(75);
}
