import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {SpecialMoveService} from "./special-move.service";
import {inject} from "@angular/core";

type MoveState = {
  firstLetter: string;
  dayOfBirth: number | null;
  surnameLetter: string;
  firstMove: string;
  secondMove: string;
  thirdMove: string;
}

const initialMoveState: MoveState = {
  firstLetter: '',
  dayOfBirth: null,
  surnameLetter: '',
  firstMove: '',
  secondMove: '',
  thirdMove: '',
}

export const MoveStore = signalStore(
  withState(initialMoveState),
  withMethods((store, service = inject(SpecialMoveService)) =>({
    updateFirstMove(move: string): void {
      let firstMove = service.GetFirstMove(move);
      patchState(store, {firstMove: firstMove});
    },
    updateSecondMove(move: number): void {
      let secondMove = service.GetSecondMove(move);
      patchState(store, {secondMove: secondMove});
    },
    updateThirdMove(move: string): void {
      let thirdMove = service.GetThirdMove(move);
      patchState(store, {thirdMove: thirdMove});
    }
  }))
)

