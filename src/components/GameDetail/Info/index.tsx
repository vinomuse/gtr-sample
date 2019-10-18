import React, { useState, useCallback, useRef } from 'react';
import { GameInfoItem } from 'stores/gameInfo';

import './index.scss';

interface Props {
  data: GameInfoItem;
}

function Info({ data }: Props) {

  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState(false);

  const handleClick = useCallback((idx: number) => {
    setIndex(idx);
    
    if (index !== idx) {
      setAnimation(true);
    }

    setTimeout(() => {
      setAnimation(false);
    }, 2000);
  }, [index]);

  return (
    <div className="info">
      <ul className="tab-menu">
        <li className="active">Game Info</li>
        <li>REVIEWS</li>
        <li>FROM DEV</li>
      </ul>
      <div className="overview">
        <h4>Overview</h4>
        <p>{ data && data.desc }</p>
        <div className="main-gallery">
          {
            data && (<img src={require(`../../../${data.img[index]}`)} width="100%" className={animation ? 'active' : ''} />)
          }
        </div>
      </div>
      <div className="screenshot">
        <h4>ScreenShots</h4>
        <ul>
          { 
            data && data.img.map((item, idx) => (
              <li className="info-item" onClick={(e) => handleClick(idx)}>
                <img 
                  src={require(`../../../${item}`)} 
                  width="100%"
                  height="100%" 
                />
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