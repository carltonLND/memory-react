export interface Game {
  cards: Card[];
  data: GameData;
}

export interface Card {
  content: string;
  revealed: boolean;
}

export interface GameData {
  duration: number;
  difficulty: Difficulty;
}

export type Difficulty = "easy" | "medium" | "hard";
