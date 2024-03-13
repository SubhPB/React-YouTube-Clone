/* -- BYIMAAN -> THE FUTURE -- */

import React, { ReactElement } from 'react';
import { ChnlProp } from './ChannelTS';
import { Data } from './ChannelTS';

function Channel({className='', xtraCss=''}: ChnlProp<null>): ReactElement {

  return (
    <div className={` w-full h-full  ${className} ${xtraCss}`}>
      <p> Welcome, to the channel interface </p>
    </div>
  );
};

export default Channel;
