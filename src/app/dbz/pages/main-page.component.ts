import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html' // similar a una importación
})

export class MainPageComponent  {

  // en el constructor se injecta el servicio para poder hacer uso en cualquier lugar de la app, de dicha data enviada
  constructor( private dbzService: DbzService) { }

  // como se coloco el servicio privado, para acceder al mismo se hara optenieno los datos por getters

  get characters(): Character[] {
    return [...this.dbzService.characters]; //retornamos el valor al mismo array raiz
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character) {
    this.dbzService.addCharacter( character );
  }

 }
