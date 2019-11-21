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
  private service: SpecialMoveService;

  public get firstLetter(): LetterMove[] {
    return this.service.firstLetter;
  }

  public get dayOfBirth(): NumberMove[] {
    return this.service.dayOfBirth;
  }

  public get surnameLetter(): LetterMove[] {
    return this.service.surname;
  }

  constructor(service: SpecialMoveService) {
    this.service = service;
  }

  public GetMove(): string {
    if (this.noSelectionsMade()) {
      return '';
    }
  }

  private noSelectionsMade(): boolean {
    if (this.selectedFirstLetter !== null) {
      return false;
    }

    return true;
  }
}
