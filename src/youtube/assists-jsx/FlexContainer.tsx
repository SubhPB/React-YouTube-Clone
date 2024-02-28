/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { CmnProps } from './Assists';

const FlexContainer: React.FC<CmnProps<any>> = ({className='flex w-full h-full flex-wrap flex-shrink-0 ', xtraCss='', children}) => {
  return (
    <div className={`flex-container ${className} ${xtraCss}`}>
      {children}
    </div>
  )
};

export default FlexContainer
