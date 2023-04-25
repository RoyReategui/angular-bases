import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter()

  onDeleteCharacterFunc(id: string){
    console.log(id);
    this.onDeleteCharacter.emit(id)
  }

}
