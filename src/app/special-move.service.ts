import { Injectable } from '@angular/core';

interface LetterMove {
  letter: string;
  move: string;
}

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

  private _dayOfBirth: {[day: number]: string} = {
    1: 'thrust',
    2: 'finger',
    3: 'knee',
    4: 'jab',
    5: 'tackle',
    6: 'throw',
    7: 'tickle',
    8: 'choke',
    9: 'uppercut',
    10: 'punch',
    11: 'claw',
    12: 'flail',
    13: 'grab',
    14: 'elbow',
    15: 'kick',
    16: 'kiss',
    17: 'greeting',
    18: 'slink',
    19: 'nap',
    20: 'sniff',
    21: 'hook',
    22: 'blow',
    23: 'scream',
    24: 'headbutt',
    25: 'smash',
    26: 'stroke',
    27: 'bite',
    28: 'slap',
    29: 'chop',
    30: 'stomp',
    31: 'smash'
  };

  public get dayOfBirth(): { [day: number]: string; } {
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
    return this._dayOfBirth[day];
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
