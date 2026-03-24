import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from "../highlight";
import { HighlightNew } from "../highlight-new";
import { Rainbow } from "../rainbow";

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
  imports: [FormsModule, Highlight, HighlightNew, Rainbow]
})
export class MiniWordComponent {
  // Définition state
  color = signal('#0b354a');
  font = signal('garamond');
  size = signal(75);
}
