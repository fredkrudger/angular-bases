import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <h3> Counter: {{ counter }} </h3>

    <button (click)="increaseBy(+1)"> + 1 </button>
    <button (click)="resetCounter()"> reset </button>
    <button (click)="increaseBy(-1)"> - 1 </button>
  `,
})

export class CounterComponent {
  public counter: number = 10;

  // esta misma funcion me sirve para incrementar o decrementar el contador
  // pero tambien podemos crear otro funcion para solo decrementar en caso de ser necesario
  increaseBy(value:number): void {
    this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }
}
