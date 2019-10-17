import { observable, action } from 'mobx';

export interface GameInfoItem {
  id: number;
  title: string;
  name: string;
  date: string;
  genre: string[];
  platform: string[];
  intro: string;
  desc: string;
  vLink: string;
  mainss: string;
  img: string[];
}

export default class GameInfoStore {
  @observable
  info: GameInfoItem[] = [];

  constructor(public root: any) {
    this.root = root;
  }

  @action
  fetchGameInfo = () => {
    fetch('/api/data.json')
    .then(res => res.json())
    .then(res => {
      this.info = res.data;
    })
    .catch(err => {
      console.log("Error Reading data " + err);
    });
  }
}