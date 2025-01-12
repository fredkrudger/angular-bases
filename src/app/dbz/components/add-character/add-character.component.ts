import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // el output se utiliza parra pasar datos de componente hijo a componente padre
  // en el mayor de los casos usa la estructura definida debajo



  //siempre que se vaya a realizar un EventEmitter, debemos importar primero el @Outout(), sino no funciona
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // definimos un  objeto por defecto, que se va a mostrar en el formulario
  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {

    if (this.character.name.length === 0 ) return; // si el nombre no tiene valor, no se envia nada

    this.onNewCharacter.emit(this.character); // emitimos el evento, debebemos usar .emit(), y le pasamos el parametro al emit()

    // para resetear el formulario y dejar los valors por defecto debemos agregarlos accdiendo a la variable

    // this.character.name = '';
    // this.character.power = 0;

    // las dos lineas de arriba, se pueden tambien resumir en una sola de la siguiente forma
    this.character = { name: '', power: 0};

  }
}
