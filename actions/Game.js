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
    });
    autorun(() => console.log(this.playersInGame));
  }

  addPlayer(player) {
    this.playersInGame.push(player);
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