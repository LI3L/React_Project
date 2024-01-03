import { observer } from "mobx-react-lite";
import { BigHead } from "@bigheads/core";
import GameList from "./GameList";
import { Words } from "../utils/Words";
import usedLetters from "./UsedLetters";


const PlayersList = observer(({ gameListState }) => {
  const randomWord=Words[Math.floor(Math.random() * Words.length)];
  let word="_".repeat(randomWord.length);
  console.log(randomWord);




  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-around" , width: "100%"}}>
      <GameList gameListState={gameListState}/>
      <usedLetters gameListState={gameListState}/>
      
    </div>
  );
});

export default PlayersList;
