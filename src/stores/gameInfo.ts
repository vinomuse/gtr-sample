import { observable, action } from 'mobx';

interface GameInfoItem {
  id: number;
  title: string;
  name: string;
  data: string;
  genre: string[];
  platform: string[];
  intro: string;
  desc: string;
  vLink: string;
  mains: string;
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
    fetch('./data.json')
    .then(res => res.json())
    .then(res => {
      this.info = res.data;
    })
    .catch(err => {
      console.log("Error Reading data " + err);
    });
  }
}