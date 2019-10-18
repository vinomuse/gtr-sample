import React from 'react';

import './index.scss';

interface Props {
  type: string;
  children: string;
}

function Button({ type, children }: Props) {

  return (
    <button 
      className={type === 'sm' ? 'sm' : 'lg'}
    >
      {children}
    </button>
  )
}

export default Button;