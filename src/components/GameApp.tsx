import { useReducer } from "react";
import { Game } from "../core/gameTypes";
import GameSetupView from "./GameSetupView";
import { gameStateReducer } from "../core/utils";

function GameApp() {
  const [gameState, gameDispatch] = useReducer(gameStateReducer, {} as Game);

  return (
    <section className="game-app">
      {gameState.cards ? (
        JSON.stringify(gameState)
      ) : (
        <GameSetupView gameDispatch={gameDispatch} />
      )}
    </section>
  );
}

export default GameApp;
