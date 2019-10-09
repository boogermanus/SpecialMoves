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

  describe('GetFirstMove', () => {
    it('should have method', () => {
      expect(service.GetFirstMove('a')).toBeTruthy();
    });

    it('should translate parameter to lowercase', () => {
      expect(service.GetFirstMove('A')).toEqual('thunder');
    });

    it('should throw an exception if parameter is not an alaphbet character', () => {
      expect(() => service.GetFirstMove('1')).toThrow(Error(service.LETTER_ERROR));
    });

  });

});
