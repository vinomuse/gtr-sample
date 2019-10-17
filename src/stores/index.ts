import GameInfoStore from "./gameInfo";

export default class RootStore {
  public gameInfo: GameInfoStore;

  constructor() {
    this.gameInfo = new GameInfoStore(this);
  }
}