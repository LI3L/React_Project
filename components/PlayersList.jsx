import { observer } from "mobx-react-lite";
import { BigHead } from "@bigheads/core";
// import {ListHead} from "./ListHead.jsx"

// import TodoView from "./TodoView";

const PlayersList = observer(({ players: playersState, Game }) => {
  const removePlayer = (id) => {
    playersState.removePlayer(id);
  };

  const checked=(player)=>{
    if(Game.playersInGame.find(p=>p.id==player.id)){
      Game.removePlayer(player.id);
    }
    else if(Game.playersInGame.length<=4){
      Game.addToGame(playersState.players.find(p=>p.id==player.id));
    }
    else{
      alert("the game is full");
    }
  }

  return (
    <div>
      {playersState.players.map(p => <>
        <div style={{display:"flex" ,alignItems:"center", justifyContent:"space-between"}}>
          <BigHead {...p.img} style={{height: "50px"}} />
          <h4>{p.name}</h4>
          <input type="checkbox"  onClick={()=>checked(p)} />
          <button onClick={() => removePlayer(p.id)} >X</button>


        </div>
      </>)}
      {/* <small> (double-click a plater to edit)</small> */}
    </div>
  );
});

export default PlayersList;
