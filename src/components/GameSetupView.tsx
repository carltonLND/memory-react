import { ReducerActions } from "../core/utils";

interface GameSetupViewProps {
  gameDispatch(action: ReducerActions): void;
}

function GameSetupView(props: GameSetupViewProps) {
  return (
    <div className="game-setup">
      <div className="difficulty-btn-container">
        <button
          className="difficulty-btn"
          onClick={() =>
            props.gameDispatch({ type: "new_game", difficulty: "easy" })
          }
        >
          EASY
        </button>
        <button
          className="difficulty-btn"
          onClick={() =>
            props.gameDispatch({ type: "new_game", difficulty: "medium" })
          }
        >
          MEDIUM
        </button>
        <button
          className="difficulty-btn"
          onClick={() =>
            props.gameDispatch({ type: "new_game", difficulty: "hard" })
          }
        >
          HARD
        </button>
      </div>
    </div>
  );
}

export default GameSetupView;
