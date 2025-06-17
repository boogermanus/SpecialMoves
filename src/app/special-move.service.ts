import {Injectable} from '@angular/core';
import {LetterMove} from './interfaces/LetterMove';
import {NumberMove} from './interfaces/NumberMove';

@Injectable({
  providedIn: 'root'
})
export class SpecialMoveService {

  private _firstLetter: LetterMove[] = [
    {letter: 'a', move: 'Thunder'},
    {letter: 'b', move: 'Silent'},
    {letter: 'c', move: 'Flying'},
    {letter: 'd', move: 'Handbag'},
    {letter: 'e', move: 'Psychotic'},
    {letter: 'f', move: 'Dancing'},
    {letter: 'g', move: 'Holy'},
    {letter: 'h', move: 'Crippling'},
    {letter: 'i', move: 'Ninja'},
    {letter: 'j', move: 'Iron'},
    {letter: 'k', move: 'Thrusting'},
    {letter: 'l', move: 'Magical'},
    {letter: 'm', move: 'Death'},
    {letter: 'n', move: 'Love'},
    {letter: 'o', move: 'Speedy'},
    {letter: 'p', move: 'Naked'},
    {letter: 'q', move: 'Violent'},
    {letter: 'r', move: 'Spectacular'},
    {letter: 's', move: 'Grinding'},
    {letter: 't', move: 'Sneaky'},
    {letter: 'u', move: 'Bendy'},
    {letter: 'v', move: 'Yellow'},
    {letter: 'w', move: 'Slippery'},
    {letter: 'x', move: 'Flapping'},
    {letter: 'y', move: 'Everlasting'},
    {letter: 'z', move: 'Golden'},
  ];

  public get firstLetter(): LetterMove[] {
    return this._firstLetter;
  }

  private _dayOfBirth: NumberMove[] = [
    {dayOfBirth: 1, move: 'Thrust'},
    {dayOfBirth: 2, move: 'Finger'},
    {dayOfBirth: 3, move: 'Knee'},
    {dayOfBirth: 4, move: 'Jab'},
    {dayOfBirth: 5, move: 'Tackle'},
    {dayOfBirth: 6, move: 'Throw'},
    {dayOfBirth: 7, move: 'Tickle'},
    {dayOfBirth: 8, move: 'Choke'},
    {dayOfBirth: 9, move: 'Uppercut'},
    {dayOfBirth: 10, move: 'Punch'},
    {dayOfBirth: 11, move: 'Claw'},
    {dayOfBirth: 12, move: 'Flail'},
    {dayOfBirth: 13, move: 'Grab'},
    {dayOfBirth: 14, move: 'Elbow'},
    {dayOfBirth: 15, move: 'Kick'},
    {dayOfBirth: 16, move: 'Kiss'},
    {dayOfBirth: 17, move: 'Greeting'},
    {dayOfBirth: 18, move: 'Slink'},
    {dayOfBirth: 19, move: 'Nap'},
    {dayOfBirth: 20, move: 'Sniff'},
    {dayOfBirth: 21, move: 'Hook'},
    {dayOfBirth: 22, move: 'Blow'},
    {dayOfBirth: 23, move: 'Scream'},
    {dayOfBirth: 24, move: 'Headbutt'},
    {dayOfBirth: 25, move: 'Smash'},
    {dayOfBirth: 26, move: 'Stroke'},
    {dayOfBirth: 27, move: 'Bite'},
    {dayOfBirth: 28, move: 'Slap'},
    {dayOfBirth: 29, move: 'Chop'},
    {dayOfBirth: 30, move: 'Stomp'},
    {dayOfBirth: 31, move: 'Smash'}
  ];

  public get dayOfBirth(): NumberMove[] {
    return this._dayOfBirth;
  }

  private _surname: LetterMove[] = [
    {letter: 'a', move: 'Death'},
    {letter: 'b', move: 'Wrath'},
    {letter: 'c', move: 'Peace'},
    {letter: 'd', move: 'Wonder'},
    {letter: 'e', move: 'Desire'},
    {letter: 'f', move: 'Mystery'},
    {letter: 'g', move: 'Rage'},
    {letter: 'h', move: 'Joy'},
    {letter: 'i', move: 'Dread'},
    {letter: 'k', move: 'Fate'},
    {letter: 'l', move: 'Animals'},
    {letter: 'm', move: 'Norris'},
    {letter: 'n', move: 'The Gods'},
    {letter: 'o', move: 'Pain'},
    {letter: 'p', move: 'War'},
    {letter: 'q', move: 'Surprise'},
    {letter: 'r', move: 'Mayhem'},
    {letter: 's', move: 'Doom'},
    {letter: 't', move: 'Hell'},
    {letter: 'u', move: 'Krakatoa'},
    {letter: 'v', move: 'The Ancients'},
    {letter: 'w', move: 'Anger'},
    {letter: 'x', move: 'Disappointment'},
    {letter: 'y', move: 'Heaven'},
    {letter: 'z', move: 'Destruction'},
  ];

  public get surname(): LetterMove[] {
    return this._surname;
  }

  private readonly LETTER: RegExp = new RegExp('[a-z|A-Z]');
  public readonly LETTER_ERROR = 'letter cannot be a number';
  public readonly LESS_THAN_ERROR = 'day cannot be less than 1';
  public readonly GREATER_THAN_ERROR = 'day cannot be greater than 31';

  constructor() {
  }

  public GetFirstMove(letter: string): string | undefined {
    return this.GetLetterMove(letter, this.firstLetter);
  }

  private GetLetterMove(letter: string, array: LetterMove[]): string | undefined {
    if (letter === null) {
      return '';
    }

    this.CheckLetter(letter);
    return array.find(fl => fl.letter === letter.toLowerCase())?.move;
  }

  private CheckLetter(letter: string): void {

    if (!this.LETTER.test(letter)) {

      throw Error(this.LETTER_ERROR);
    }

  }

  public GetSecondMove(day: number): string | undefined {

    if (day === null) {
      return '';
    }

    this.CheckDayRange(day);

    return this.dayOfBirth?.find(dob => dob.dayOfBirth === day)?.move;

  }

  private CheckDayRange(day: number): void {

    if (day < 1) {
      throw Error(this.LESS_THAN_ERROR);
    }

    if (day > 31) {
      throw Error(this.GREATER_THAN_ERROR);
    }

  }

  public GetThirdMove(letter: string): string | undefined {
    return `of ${this.GetLetterMove(letter, this.surname)}`;
  }
}
