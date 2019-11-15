import { Injectable } from '@angular/core';
import { LetterMove } from './interfaces/LetterMove';
import { NumberMove } from './interfaces/NumberMove';

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

  private _surname: LetterMove[] = [
    { letter: 'a', move: 'death' },
    { letter: 'b', move: 'wrath' },
    { letter: 'c', move: 'peace' },
    { letter: 'd', move: 'wonder' },
    { letter: 'e', move: 'desire' },
    { letter: 'f', move: 'mystery' },
    { letter: 'g', move: 'rage' },
    { letter: 'h', move: 'joy' },
    { letter: 'i', move: 'dread' },
    { letter: 'k', move: 'fate' },
    { letter: 'l', move: 'animals' },
    { letter: 'm', move: 'norris' },
    { letter: 'n', move: 'the gods' },
    { letter: 'o', move: 'pain' },
    { letter: 'p', move: 'war' },
    { letter: 'q', move: 'surprise' },
    { letter: 'r', move: 'mayhem' },
    { letter: 's', move: 'doom' },
    { letter: 't', move: 'hell' },
    { letter: 'u', move: 'krakatoa' },
    { letter: 'v', move: 'the acients' },
    { letter: 'w', move: 'anger' },
    { letter: 'x', move: 'disappointment' },
    { letter: 'y', move: 'heaven' },
    { letter: 'z', move: 'destruction' },
  ];

  public get surname(): LetterMove[] {
    return this._surname;
  }
  private readonly LETTER: RegExp = new RegExp('[a-z|A-Z]');
  public readonly LETTER_ERROR = 'letter cannot be a number';
  public readonly LESSTHAN_ERROR = 'day cannot be less than 1';
  public readonly GREATERTHAN_ERROR = 'day cannot be greater than 31';
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
    if (!this.LETTER.test(letter)) {
      throw Error(this.LETTER_ERROR);
    }
    return `of ${this.surname.find(fl => fl.letter === letter.toLowerCase()).move}`;
  }
}
