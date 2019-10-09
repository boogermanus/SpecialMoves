import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialMoveService {

  private firstLetter: {[letter: string]: string} = {
    a: 'thunder',
  };
  private LETTER: RegExp = new RegExp('[a-z|A-Z]');
  public LETTER_ERROR = 'letter cannot be a number';

  constructor() { }

  public GetFirstMove(letter: string): string {

    if (!this.LETTER.test(letter)) {
      throw Error(this.LETTER_ERROR);
    }

    return this.firstLetter[letter.toLowerCase()];
  }
}
