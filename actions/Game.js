import { makeObservable, observable, computed, action, autorun } from "mobx";


export class Game {
  id = 0;
  playersInGame = [];

  constructor() {
    makeObservable(this, {
      playersInGame: observable,
      addPlayer: action,
      removePlayer: action,
      addToGame: action,
      guessLetter:action,
      addLetter:action,
      addScore:action,
    });
    autorun(() => console.log(this.playersInGame));
  }
  addScore(player){
    this.playersInGame.find((p)=>p.id===player.id).score+=1;
    // player.score+=1;
  }
  addLetter(player,letter){
    player.chars+=letter+", ";
  }

  guessLetter(player) {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
  } 

  addPlayer(player) {
    this.playersInGame.push({...player,chars:"",score:0});
 }
  
  removePlayer(playerId) {
    this.playersInGame = this.playersInGame.filter((player) => player.id !== playerId);
  }

  addToGame(playerToPlay) {
    console.log("hello"+playerToPlay);
    this.playersInGame.push(playerToPlay);
    // playersInGame = playersToPlay;
}
  
}
