import React from 'react';
import YouTube from 'react-youtube';
import { GameInfoItem } from 'stores/gameInfo';

import './index.scss';
import Button from 'components/Common/Button';

interface Props {
  data: GameInfoItem;
}

function IntroYoutube({ data }: Props) {
  const videoId = data && data.vLink.split('/')[data.vLink.split('/').length - 1];

  const opts = {
    height: '390',
    width: '640',
  };

  return (
    <div className="intro-youtube">
      <YouTube 
        videoId={videoId}
        opts={opts}
        containerClassName="youtube-container"
      />
      <div className="intro">
        <h2>{data && data.name}</h2>
        <h3>{data && data.title}</h3>
        <span>{data && data.date}</span>
        <p>{data && data.intro}</p>
        <div className="btn-group">
          {/* <button className="btn-sm">Test Requirements</button>
          <button className="btn-sm">Take a Survey</button>
          <button className="btn-lg">Play</button> */}
          <Button type="sm">Test Requirements</Button>
          <Button type="sm">Take a Survey</Button>
        </div>
        <Button type="lg">Play</Button>
      </div>
    </div>
  )
}

export default IntroYoutube;