import React from 'react';
import useGameInfo from 'hooks/useGameInfo';
import { inject, observer } from 'mobx-react';
import GameInfoStore from 'stores/gameInfo';
import IntroYoutube from './IntroYoutube/index';
import { addDash } from 'utils/text';
import { toJS } from 'mobx';
import Info from './Info';

interface Props {
  gameInfo?: GameInfoStore;
  title: string;
}

function GameDetail({ gameInfo, title }: Props) {
  const data = useGameInfo(gameInfo!).filter((item) => addDash(item.title) === title)[0];

  return (
    <div className="game-info">
      <IntroYoutube 
        data={data}
      />
      <Info data={data} />
    </div>
  )
}

export default inject('gameInfo')(observer(GameDetail))