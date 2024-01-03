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
    });
    autorun(() => console.log(this.playersInGame));
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
