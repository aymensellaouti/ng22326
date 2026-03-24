import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-fils',
  imports: [],
  templateUrl: './fils.html',
  styleUrl: './fils.css',
})
export class Fils {
  messagePapa = input.required({
    alias: 'message',
    transform: (value: string) => {
     return "Le message de papa est " + value;
    }
  });
}

