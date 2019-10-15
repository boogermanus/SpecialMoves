import { Injectable } from '@angular/core';
import { LetterMove } from './interfaces/LetterMove';
interface NumberMove {
  dayOfBirth: number;
  move: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpecialMoveService {

  private _firstLetter: LetterMove[] = [
    { letter: 'a', move: 'thunder' },
    { letter: 'b', move: 'slient' },
    { letter: 'c', move: 'flying' },
    { letter: 'd', move: 'handbag' },
    { letter: 'e', move: 'psychotic' },
    { letter: 'f', move: 'dancing' },
    { letter: 'g', move: 'holy' },
    { letter: 'h', move: 'crippling' },
    { letter: 'i', move: 'ninja' },
    { letter: 'j', move: 'iron' },
    { letter: 'k', move: 'thrusting' },
    { letter: 'l', move: 'magical' },
    { letter: 'm', move: 'death' },
    { letter: 'n', move: 'love' },
    { letter: 'o', move: 'speedy' },
    { letter: 'p', move: 'naked' },
    { letter: 'q', move: 'violent' },
    { letter: 'r', move: 'spectacular' },
    { letter: 's', move: 'gridning' },
    { letter: 't', move: 'sneaky' },
    { letter: 'u', move: 'bendy' },
    { letter: 'v', move: 'yellow' },
    { letter: 'w', move: 'slippery' },
    { letter: 'x', move: 'flapping' },
    { letter: 'y', move: 'everlasting' },
    { letter: 'z', move: 'golden' },
  ];

  public get firstLetter(): LetterMove[] {
    return this._firstLetter;
  }

  private _dayOfBirth: NumberMove[] = [
    { dayOfBirth: 1, move: 'thrust' },
    { dayOfBirth: 2, move: 'finger' },
    { dayOfBirth: 3, move: 'knee' },
    { dayOfBirth: 4, move: 'jab' },
    { dayOfBirth: 5, move: 'tackle' },
    { dayOfBirth: 6, move: 'throw' },
    { dayOfBirth: 7, move: 'tickle' },
    { dayOfBirth: 8, move: 'choke' },
    { dayOfBirth: 9, move: 'uppercut' },
    { dayOfBirth: 10, move: 'punch' },
    { dayOfBirth: 11, move: 'claw' },
    { dayOfBirth: 12, move: 'flail' },
    { dayOfBirth: 13, move: 'grab' },
    { dayOfBirth: 14, move: 'elbow' },
    { dayOfBirth: 15, move: 'kick' },
    { dayOfBirth: 16, move: 'kiss' },
    { dayOfBirth: 17, move: 'greeting' },
    { dayOfBirth: 18, move: 'slink' },
    { dayOfBirth: 19, move: 'nap' },
    { dayOfBirth: 20, move: 'sniff' },
    { dayOfBirth: 21, move: 'hook' },
    { dayOfBirth: 22, move: 'blow' },
    { dayOfBirth: 23, move: 'scream' },
    { dayOfBirth: 24, move: 'headbutt' },
    { dayOfBirth: 25, move: 'smash' },
    { dayOfBirth: 26, move: 'stroke' },
    { dayOfBirth: 27, move: 'bite' },
    { dayOfBirth: 28, move: 'slap' },
    { dayOfBirth: 29, move: 'chop' },
    { dayOfBirth: 30, move: 'stomp' },
    { dayOfBirth: 31, move: 'smash' }
  ];

  public get dayOfBirth(): NumberMove[] {
    return this._dayOfBirth;
  }

  private _surname: {[letter: string]: string} = {
    a: 'death',
    b: 'wrath',
    c: 'peace',
    d: 'wonder',
    e: 'desire',
    f: 'mystery',
    g: 'rage',
    h: 'joy',
    i: 'dread',
    k: 'fate',
    l: 'animals',
    m: 'norris',
    n: 'the gods',
    o: 'pain',
    p: 'war',
    q: 'surprise',
    r: 'mayhem',
    s: 'doom',
    t: 'hell',
    u: 'krakatoa',
    v: 'the acients',
    w: 'anger',
    x: 'disappointment',
    y: 'heaven',
    z: 'destruction'
  };

  public get surname(): {[letter: string]: string} {
    return this._surname;
  }
  private LETTER: RegExp = new RegExp('[a-z|A-Z]');
  public LETTER_ERROR = 'letter cannot be a number';
  public LESSTHAN_ERROR = 'day cannot be less than 1';
  public GREATERTHAN_ERROR = 'day cannot be greater than 31';
  constructor() { }

  public GetFirstMove(letter: string): string {

    if (!this.LETTER.test(letter)) {
      throw Error(this.LETTER_ERROR);
    }

    return this.firstLetter.find(fl => fl.letter === letter.toLowerCase()).move;
  }

  public GetSecondMove(day: number): string {
    this.CheckDayRange(day);
    return this.dayOfBirth.find(dob => dob.dayOfBirth === day).move;
  }

  private CheckDayRange(day: number): void {
    if (day < 1) {
      throw Error(this.LESSTHAN_ERROR);
    }

    if (day > 31) {
      throw Error(this.GREATERTHAN_ERROR);
    }
  }

  public GetThirdMove(letter: string): string {
    return 'of';
  }
}
