import { observer } from "mobx-react-lite";
import { BigHead } from "@bigheads/core";



const PlayersList = observer(({ gameListState }) => {
  const removePlayer = (id) => {
    gameListState.removePlayer(id);
  };

  console.log(JSON.stringify(gameListState.playersInGame));



  return (
    <div>
      {gameListState.playersInGame.map(p => 
      <>2
        <BigHead {...p.img} style={{height: "50px"}} />
        <div style={{display:"flex" ,alignItems:"center", justifyContent:"space-between"}}>
          <h4>{p.name}</h4>
        </div>
      </>
      )}
      {/* <small> (double-click a plater to edit)</small> */}
    </div>
  );
});

export default PlayersList;
