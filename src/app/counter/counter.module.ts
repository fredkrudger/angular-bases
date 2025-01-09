import { NgModule } from "@angular/core";
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports:[
    //aqui colocamos las declaraciones  de variables que queremos exportar al mundo exterior
    CounterComponent
  ]
})


export class CounterModule {}
