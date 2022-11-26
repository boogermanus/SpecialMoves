import { Component } from '@angular/core';
import { SpecialMoveService } from './special-move.service';
import { LetterMove } from './interfaces/LetterMove';
import { NumberMove } from './interfaces/NumberMove';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Special Move';
  public selectedFirstLetter: string = null;
  public selectedDayOfBirth: number = null;
  public selectedSurnameLetter: string = null;
  public selectedMove = '';

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
    const firstMove: string = this.service.GetFirstMove(this.selectedFirstLetter);
    const dayOfBirthMove: string = this.service.GetSecondMove(this.selectedDayOfBirth);
    const surnameMove: string = this.service.GetThirdMove(this.selectedSurnameLetter);
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
}
