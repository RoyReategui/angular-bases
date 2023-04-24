import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter {{ counter }}</p>
    <button (click)="incrementBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementBy(-1)">-1</button>

  `
})

export class CounterComponent implements OnInit {

  public title: string = 'Mi primera app';
  public counter: number = 10;

  incrementBy( value: number ):void {
    this.counter+=value
  }

  reset(): void{
    this.counter = 10
  }


  constructor() { }

  ngOnInit() { }
}
