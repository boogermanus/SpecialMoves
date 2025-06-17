import {Component, inject} from '@angular/core';
import {SpecialMoveService} from './special-move.service';
import {LetterMove} from './interfaces/LetterMove';
import {NumberMove} from './interfaces/NumberMove';
import {MoveStore} from "./move-store";
import {first} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
  providers: [MoveStore]
})
export class AppComponent {
  public title = 'Special Move';
  public selectedFirstLetter: string = "";
  public selectedDayOfBirth: number = 0;
  public selectedSurnameLetter: string = "";
  public selectedMove = '';
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

  public GetMove(): string {
    if (this.noSelectionsMade()) {
      return '';
    }
    const firstMove: string | undefined = this.service.GetFirstMove(this.selectedFirstLetter);
    const dayOfBirthMove: string | undefined = this.service.GetSecondMove(this.selectedDayOfBirth);
    const surnameMove: string | undefined = this.service.GetThirdMove(this.selectedSurnameLetter);
    return `${firstMove} ${dayOfBirthMove} ${surnameMove}`;
  }

  public onClick() {
    this.selectedMove = this.GetMove();
  }

  private noSelectionsMade(): boolean {
    if (this.selectedFirstLetter !== null
      && this.selectedDayOfBirth !== null
      && this.selectedSurnameLetter !== null) {
      return false;
    }

    return true;
  }

  protected readonly first = first;
}
