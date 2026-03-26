import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  imports: [AsyncPipe],
  templateUrl: './test-observable.html',
  styleUrl: './test-observable.css',
})
export class TestObservable {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService);
  constructor() {
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.myObservable$.subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    // setTimeout(() => {
    this.myObservable$
    .pipe(
      // 5 4 3 2 1
      map(value => value * 3),
      // 15 12 9 6 3
      filter(element => element % 2 == 0)
      // 12 6
    )
    .subscribe({
      next: (val) => {
        this.toastr.info('' + val);
      },
      complete: () => {
        this.toastr.error('BOOOOM !!!!!');
      },
    });

    // },3000);
  }
}
