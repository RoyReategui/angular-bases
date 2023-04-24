import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Iroman'
  public age: number = 45


  get capitalizeName(): string {
    return this.name.toUpperCase()
  }

  public getHeroDescription():string {
    return `${ this.name } - ${ this.age }`
  }

  changeNameHero(): void {
    this.name = 'Batman'
  }

  changeAgeHero(): void {
    this.age = 30
  }

  reserForm():void {
    // this.name = 'Iroman';
    this.age = 45

    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = 'Iroman'
    })
  }

}
