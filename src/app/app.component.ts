import {Component, inject} from '@angular/core';
import {SpecialMoveService} from './special-move.service';
import {LetterMove} from './interfaces/LetterMove';
import {NumberMove} from './interfaces/NumberMove';
import {MoveStore} from "./move-store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
  providers: [MoveStore]
})
export class AppComponent {
  public title = 'Special Move';
  public store = inject(MoveStore);

  public get firstLetter(): LetterMove[] {
    return this.service.firstLetter;
  }

  public get dayOfBirth(): NumberMove[] {
    return this.service.dayOfBirth;
  }

  public get surnameLetter(): LetterMove[] {
    return this.service.surname;
  }

  constructor(private service: SpecialMoveService) {
  }
}
