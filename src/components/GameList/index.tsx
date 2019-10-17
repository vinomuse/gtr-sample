import React, { useEffect, useMemo } from 'react';
import { observer, inject } from 'mobx-react';

import './index.scss';
import GameInfoStore from 'stores/gameInfo';
import { Link } from 'react-router-dom';
import { addDash } from 'utils/text';

interface Props {
  gameInfo?: GameInfoStore;
}

function GameItem({ gameInfo }: Props) {

  const { info, fetchGameInfo } = gameInfo!;

  useEffect(() => {
    fetchGameInfo();
  }, []);

  
  return (
    <ul className="game-list">
      {info.map(item => (
        <li key={item.id}>
          <Link to={`/detail/${addDash(item.title)}`}>
            {/* <img src={'/' + item.img[item.img.length - 1]} alt={item.title + 'image'} /> */}
            <img src={require(`../../${item.img[item.img.length - 1]}`)} alt={item.title + ' image'} width="100%" />
          </Link>
        </li>
      ))}
    </ul>
  )
};

export default inject('gameInfo')(observer(GameItem));