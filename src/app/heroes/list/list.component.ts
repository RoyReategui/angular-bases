import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes: string[] = ['Spiderman','Iroman','Hulk', 'Batman']
  public deleteHero?: string


  removeLastHero():void {
    this.deleteHero =  this.heroes.pop() || ''
  }

}
