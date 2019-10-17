import React from 'react';
import { RouteComponentProps } from 'react-router';
import GameDetail from 'components/GameDetail';

interface Props {
  name: string;
}

function Detail({ match }: RouteComponentProps<Props>) {
  return (
    <GameDetail title={match.params.name} />
  )
}

export default Detail;