import { Card, Difficulty, Game } from "./gameTypes";
import { shuffleArray } from "./utils";

export function createGame(difficulty: Difficulty): Game {
  const cardContent = getCardContent();
  const game: Game = { cards: [], data: { duration: 0 } };

  switch (difficulty) {
    case "easy":
      game.cards = shuffleArray(createCards(2, cardContent));
      break;
    case "medium":
      game.cards = shuffleArray(createCards(8, cardContent));
      break;
    case "hard":
      game.cards = shuffleArray(createCards(18, cardContent));
      break;
    default: {
      const _value: never = difficulty;
      throw new Error(`Difficulty: ${_value} cannot be created!`);
    }
  }

  return game;
}

function createPair(content: string): [Card, Card] {
  return [
    { content, revealed: false },
    { content, revealed: false },
  ];
}

function createCards(numPairs: number, content: string[]): Card[] {
  if (content.length < numPairs) {
    throw new Error("Not enough content for the number of cards");
  }

  const cards: Card[] = [];
  for (let i = 0; i < numPairs; i++) {
    const cardContent = content.pop() as string;
    cards.push(...createPair(cardContent));
  }

  return cards;
}

function getCardContent() {
  const cardContent = [
    "👻",
    "💙",
    "💥",
    "🤖",
    "👀",
    "🧠",
    "👣",
    "🐙",
    "🐚",
    "🍉",
    "🍥",
    "🦴",
    "🍄",
    "🍿",
    "🧱",
    "🚀",
    "🔥",
    "🔨",
  ];

  return shuffleArray(cardContent);
}
