import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nameHero: string = 'ironman';
  public ageHero:  number = 45;


  // los getter son similares a una propiedad, pero solo sirven para mostrar datos
  get capitalizedName():string {
    return this.nameHero.toUpperCase();
  }

  // este es un metodo que se puede llamar desde el template
  getHeroDescriotion():string{
    return `${this.nameHero} - ${this.ageHero}`;
  }

  changeHero():void {
    this.nameHero = 'Spiderman';
  }

  changeAge():void {
    this.ageHero = 25;
  }

  reset():void {
    this.nameHero = 'ironman';
    this.ageHero  = 45;
  }


}
