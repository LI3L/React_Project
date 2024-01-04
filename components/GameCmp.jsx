import { observer } from "mobx-react-lite";
import GameList from "./GameList";
import { Words } from "../utils/Words";
import StartGame from "./StartGame";

const GameCmp = observer(({ gameListState }) => {
  const randomWord=()=>Words[Math.floor(Math.random() * Words.length)];
  // let word="_".repeat(randomWord.length);
  console.log(randomWord);




  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"space-around" , width: "100%"}}>
      <GameList gameListState={gameListState}/>
      <StartGame gameListState={gameListState} randomWord={randomWord}/>
      
    </div>
  );
});

export default GameCmp;
