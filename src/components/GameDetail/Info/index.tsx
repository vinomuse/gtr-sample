import React from 'react';
import { GameInfoItem } from 'stores/gameInfo';

interface Props {
  data: GameInfoItem;
}

function Info({ data }: Props) {
  return (
    <div className="info">
      <div>
        <h4>Overview</h4>
        <p>{ data && data.desc }</p>
      </div>
      <div>
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