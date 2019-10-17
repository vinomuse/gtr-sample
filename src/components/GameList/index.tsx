import React from 'react';
import { observer, inject } from 'mobx-react';

import './index.scss';
import GameInfoStore from 'stores/gameInfo';
import { Link } from 'react-router-dom';
import { addDash } from 'utils/text';
import useGameInfo from 'hooks/useGameInfo';

interface Props {
  gameInfo?: GameInfoStore;
}

function GameList({ gameInfo }: Props) {

  const data = useGameInfo(gameInfo!);
  
  return (
    <ul className="game-list">
      {data.map(item => (
        <li key={item.id}>
          <Link to={`/detail/${addDash(item.title)}`}>
            <img 
              src={require(`../../${item.img[item.img.length - 1]}`)} 
              alt={item.title + ' image'} 
              width="100%" 
              height="100%"
            />
          </Link>
        </li>
      ))}
    </ul>
  )
};

export default inject('gameInfo')(observer(GameList));