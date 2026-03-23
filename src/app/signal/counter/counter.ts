import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter = signal(0);

  increment() {
    this.counter.update(
      (count) => count + 1
    )
  }

  reset() {
    this.counter.set(0);
  }
}
