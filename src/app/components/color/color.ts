import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
  /**
   * var: la couleur par défaut du bg
   */
  private defaultColor = 'green';
  /**
   * var: la couleur du bg
   */
  color = signal(this.defaultColor);

  changeColor(newColor: HTMLInputElement) {
    this.color.set(newColor.value);
    newColor.value = '';
  }

  reset() {
    this.color.set(this.defaultColor);
  }
}
