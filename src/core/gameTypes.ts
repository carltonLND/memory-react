export interface Card {
  content: string;
  revealed: boolean;
}

export interface GameData {
  duration: number;
  lives: number;
}

export type Difficulty = "easy" | "medium" | "hard";
