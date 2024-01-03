import { useState } from "react";
// import {ListHead} from "../components/ListHead.jsx";
import { makeAutoObservable } from "mobx";
import { Players } from "../actions/Players.js";
import { Game } from "../actions/Game.js";
import PlayersList from "../components/PlayersList.jsx";
import GameList from "../components/Game.jsx";


const wordList=["apple","banana","home","dog","class"];

export default function List() {    
 
    const playersState = new Players();
    const gameListState = new Game();

    function addPlayer(){
        playersState.addPlayer(prompt("Enter a new player", "Liel"));
    }

   

 return (
        <>
            <div style={{display:"flex"}}>
                <div style={{flex:"1",border:"1px solid black" }}>
                    <div style={{display:"flex"}}>
                        <h1>Players</h1> 
                        <button onClick={addPlayer} style={{height:40,margin:23}}>Add</button>
                    </div>
                    <PlayersList players={playersState} Game={gameListState}/>
                </div>
                <div style={{flex:"3",border:"1px solid black" }}>
                    <h1>Game</h1> 
                    <div style={{display:"flex"}}>
                        <GameList gameListState={gameListState} />
                    </div>
                        <button>blah</button>

                </div>
            </div>
        </>
    );
}
