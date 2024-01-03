import { observer } from "mobx-react-lite";
import { Words } from "../utils/Words";


const  UsedLetters= observer(({gameListState,word,letter}) => { 
    const randomWord=Words[Math.floor(Math.random() * Words.length)];
    let guessLetter="";
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-around" , width: "100%"}}>
        <h3>{guessLetter}</h3>
        {/* <small> (double-click a plater to edit)</small> */}
    </div>
  );
});

export default UsedLetters;

