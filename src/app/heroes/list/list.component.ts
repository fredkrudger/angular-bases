import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk' , 'Thor'];
  public deletedHero?:string; // la varibale esta opcional ya que no es obligatoria

  // para borrar el primer  elemento de la lista array se usa (shift)
  // para borrar el ultimo  elemento de la lista array se usa (pop)

  removeLastHero():void{
   this.deletedHero =  this.heroNames.pop(); //accedemos a la varible y el valor es pasado a dicha variable definida arriba, para poder hacer uso de la variable en el template completo
  }

}

