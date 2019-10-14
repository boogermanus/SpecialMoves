import { TestBed } from '@angular/core/testing';
import { SpecialMoveService } from './special-move.service';

describe('SpecialMoveService', () => {
  let service: SpecialMoveService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(SpecialMoveService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // GetFirstMove    ---------------------------------------------------------------------------------
  describe('GetFirstMove', () => {
    it('should have method', () => {
      expect(service.GetFirstMove('a'))
        .toBeTruthy();
    });
    it('should translate parameter to lowercase', () => {
      expect(service.GetFirstMove('A')).toEqual('thunder');
    });
    it('should throw exception if parameter is not an alaphbet character', () => {
      expect(() => service.GetFirstMove('1'))
        .toThrow(Error(service.LETTER_ERROR));
    });
    // it('should return a valid value for all alphabet characters', () => {
    //   const firstName = service.firstLetter;

    //   for (const letter in firstName) {
    //     if (firstName[letter] != null) {
    //       expect(service.GetFirstMove(letter)).toEqual(firstName.find(fn => fn.letter === letter).move);
    //     }
    //   }
    // });
  });
  // GetSecondMove    ---------------------------------------------------------------------------------
  describe('GetSecondMove', () => {
    it('should have method', () => {
      expect(service.GetSecondMove(1)).toBeTruthy();
    });
    it('should throw exception if number is less than 1', () => {
      expect(() => service.GetSecondMove(0))
        .toThrow(Error(service.LESSTHAN_ERROR));
    });
    it('should throw exception if number is greater than 31', () => {
      expect(() => service.GetSecondMove(32))
        .toThrow(Error(service.GREATERTHAN_ERROR));
    });
    it('should return a valid value for all numbers from 1 to 31', () => {
      const days = service.dayOfBirth;

      for (let i = 1; i < 32; i++) {
        expect(service.GetSecondMove(i)).toEqual(days[i]);
      }
    });
  });
  // GetThirdMove   ---------------------------------------------------------------------------------
  describe('GetThirdMove', () => {
      it('should have method', () => {
        expect(() => service.GetThirdMove('a')).toBeTruthy();
      });
    });
});
