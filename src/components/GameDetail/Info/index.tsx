import React from 'react';
import { GameInfoItem } from 'stores/gameInfo';

import './index.scss';

interface Props {
  data: GameInfoItem;
}

function Info({ data }: Props) {
  return (
    <div className="info">
      <div className="overview">
        <h4>Overview</h4>
        <p>{ data && data.desc }</p>
      </div>
      <div className="screenshot">
        <h4>ScreenShots</h4>
        <ul>
          { 
            data && data.img.map(item => (
              <li>
                <img 
                  src={require(`../../../${item}`)} 
                  width="100%"  />
              </li>
              ) 
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Info;