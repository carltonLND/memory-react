import { createGame } from "./createGame";
import { Difficulty, Game } from "./gameTypes";

export type ReducerActions = NewGame | EndGame;

interface NewGame {
  type: "new_game";
  difficulty: Difficulty;
}

interface EndGame {
  type: "end_game";
}

//@ts-ignore
export function gameStateReducer(game: Game, action: ReducerActions): Game {
  switch (action.type) {
    case "new_game":
      return createGame(action.difficulty);
    case "end_game":
      return {} as Game;
    default: {
      const _value: never = action;
      throw new Error(`Reducer action type: ${_value} not created!`);
    }
  }
}

export function shuffleArray<T>(arr: T[]): T[] {
  return [...arr].sort(() => (Math.random() > 0.5 ? 1 : -1));
}
