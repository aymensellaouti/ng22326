import { Directive, signal } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
  host: {
    '[style.color]': 'this.color()',
    '[style.borderColor]': 'this.color()',
    '(keyup)': 'this.onKeyUp()',
  },
})
export class Rainbow {
  color = signal('black');
  constructor() {
    console.log('in appRainbow');
  }
  onKeyUp() {
    this.color.set(this.getRandomColor())
  }
  getRandomColor(): string {
    return `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')}`;
  }
}
