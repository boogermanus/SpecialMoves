import { TestBed } from '@angular/core/testing';
import { SpecialMoveService } from './special-move.service';


// to debug tests run 'ng test --browsers Chrome_with_debugging'
describe('SpecialMoveService', () => {
  let service: SpecialMoveService;
  const FIRST_LETTER_FIRST_MOVE = 'Thunder';
  const SURNAME_LETTER_FIRST_MOVE = 'of Death';
  const NON_ALAPHBET_CHARACTER = '1';
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
      expect(service.GetFirstMove('A')).toEqual(FIRST_LETTER_FIRST_MOVE);
    });
    it('should throw exception if parameter is not an alaphbet character', () => {
      expect(() => service.GetFirstMove(NON_ALAPHBET_CHARACTER))
        .toThrow(Error(service.LETTER_ERROR));
    });
    it('should return a valid value for all alphabet characters', () => {
      const firstName = service.firstLetter;

      for (const firstLetter of firstName) {
        if (firstLetter != null) {
          expect(service.GetFirstMove(firstLetter.letter))
            .toEqual(firstLetter.move);
        }
      }
    });
    it('should return empty string from a null value', () => {
      expect(service.GetFirstMove(null)).toBe('');
    });
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
        expect(service.GetSecondMove(i)).toEqual(days[i - 1].move);
      }
    });
    it('should return empty string from a null value', () => {
      expect(service.GetSecondMove(null)).toBe('');
    });
  });
  // GetThirdMove   ---------------------------------------------------------------------------------
  describe('GetThirdMove', () => {
      it('should have method', () => {
        expect(() => service.GetThirdMove('a')).toBeTruthy();
      });
      it('should translate parameter to lowercase', () => {
        expect(service.GetThirdMove('A')).toEqual(SURNAME_LETTER_FIRST_MOVE);
      });
      it('should throw exception if parameter is not an alaphbet character', () => {
        expect(() => service.GetThirdMove('1'))
          .toThrow(Error(service.LETTER_ERROR));
      });
      it('should return a valid value for all alphabet characters', () => {
        const surname = service.surname;

        for (const firstLetter of surname) {
          if (firstLetter != null) {
            expect(service.GetThirdMove(firstLetter.letter))
              .toEqual(`of ${firstLetter.move}`);
          }
        }
      });
      it('should return empty string from a null value', () => {
        expect(service.GetThirdMove(null)).toBe('');
      });
     });
});
