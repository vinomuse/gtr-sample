import React from 'react';
import { RouteComponentProps } from 'react-router';

interface Props {
  name: string;
}

function Detail({ match }: RouteComponentProps<Props>) {
  
  return (
    <div>
      Detail {match.params.name}
    </div>
  )
}

export default Detail;