import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports:[
    HeroComponent,
    ListComponent,
  ],
  imports:[
    // aqui se colocan los imports que son nativos de angular
    CommonModule,
  ]
})

export class HeroesModule{}
