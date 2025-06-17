import {signalStore, withState} from "@ngrx/signals";

type MoveState = {
  firstLetter: string;
  dayOfBirth: number | null;
  surnameLetter: string;
}

const initialMoveState: MoveState = {
  firstLetter: 'Hello',
  dayOfBirth: null,
  surnameLetter: 'World'
}

export const MoveStore = signalStore(
  withState(initialMoveState)
)

