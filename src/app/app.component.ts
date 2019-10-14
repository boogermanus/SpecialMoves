import { Component } from '@angular/core';
import { SpecialMoveService } from './special-move.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpecialMove';
  service: SpecialMoveService;
  constructor(service: SpecialMoveService) {
    this.service = service;
  }

  public get surname(): {[letter: string]: string} {
    return this.service.surname;
  }
}
