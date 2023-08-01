import { Card, Difficulty } from "./gameTypes";
import { shuffleArray } from "./utils";

export function createGame(difficulty: Difficulty): Card[] {
  const cardContent = getCardContent();
  switch (difficulty) {
    case "easy":
      return shuffleArray(createCards(2, cardContent));
    case "medium":
      return shuffleArray(createCards(8, cardContent));
    case "hard":
      return shuffleArray(createCards(18, cardContent));
    default: {
      const _value: never = difficulty;
      throw new Error(`Difficulty: ${_value} cannot be created!`);
    }
  }
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
