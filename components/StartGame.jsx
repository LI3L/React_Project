import { observer } from "mobx-react-lite";
import UsedLetters from "./UsedLetters";

const StartGame = observer(({ gameListState, randomWord }) => {
  const randomPlayer = () =>gameListState.playersInGame[Math.floor(Math.random() * gameListState.playersInGame.length)];
  const Word = randomWord();
  let wordToGuess = "_ ".repeat(Word.length);
  let intervalId = null;

  function checkLetter(letter) {
    if (Word.includes(letter)) return true;
    else return false;
  }

  function checkEndGame() {
    if (wordToGuess.includes("_")) return false;
    else return true;
  }

  function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  }

  function startGame() {
    const player = randomPlayer();
    const letter = getRandomLetter();
    if (checkLetter(letter)) {
      gameListState.addScore(player,letter);
      gameListState.addLetter(player,letter);
      let wordArray = wordToGuess.split("");
      for (let i = 0; i < Word.length; i++) {
        if (Word[i] === letter) {
          wordArray[i] = letter;
        }
      }
      wordToGuess = wordArray.join("");
    }

    if (checkEndGame()) {
      clearInterval(intervalId);
      console.log('Game over! Interval stopped.');
    }
  }

  const startGame2 = () => {
    intervalId = setInterval(startGame, 1000);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <button onClick={startGame}>Start Game</button>
      <h2>{wordToGuess}</h2>
      {/* <UsedLetters letter={Word} /> */}
    </div>
  );
});

export default StartGame;
