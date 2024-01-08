import { observer } from "mobx-react-lite";
import UsedLetters from "./UsedLetters";

const StartGame = observer(({ gameListState }) => {
  let intervalId = null;

  const startGame2 = () => {
    intervalId = setInterval(startGame, 1000);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h2>{gameListState.wordToGuess}</h2>
      <button
        onClick={() => {
          gameListState.startGame();
        }}
      >
        Start Game
      </button>
      {/* <UsedLetters letter={Word} /> */}
    </div>
  );
});

export default StartGame;
