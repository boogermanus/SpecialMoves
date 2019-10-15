import { Component } from '@angular/core';
import { SpecialMoveService } from './special-move.service';
import { LetterMove } from './interfaces/LetterMove';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'SpecialMove';
  private service: SpecialMoveService;
  public get firstLetter(): LetterMove[] {
    return this.service.firstLetter;
  }
  constructor(service: SpecialMoveService) {
    this.service = service;
  }
}
