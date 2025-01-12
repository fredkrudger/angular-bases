import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  // el input me permite pasar datos a un componente padre con datos ya definidos
  @Input()
  // valores establecidos por defecto, cunado no tengamos datos, tambien se puede hacer con un [], que es vacio
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];


//siempre que se vaya a realizar un EventEmitter, debemos importar primero el @Outout(), sino no funciona
@Output()
 public onDeleteId: EventEmitter<string> = new EventEmitter();

  //en el parametro hay que definir el tipo de dato que recibe y el tipo de dato que retorna, hay que declararlos
  onDeleteCharacter(id?: string):void { // el id es opcional, porque puede ser undefined

    if (!id) return; // en caso de que no exista o sea undefined, no se ejecuta el codigo

    // si el id existe, se ejecuta el codigo y elimina el personaje
    this.onDeleteId.emit(id);

  }


 }
