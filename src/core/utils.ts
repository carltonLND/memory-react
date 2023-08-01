export function shuffleArray<T>(arr: T[]): T[] {
  const arrCopy = [...arr];
  return arrCopy.sort(() => (Math.random() > 0.5 ? 1 : -1));
}
