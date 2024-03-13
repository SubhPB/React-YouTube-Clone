/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { ChnlProp } from '../ChannelTS';
import { Data } from '../ChannelTS';


const ChannelHeader: React.FC<ChnlProp<Data>> = ({className='', xtraCss='', src, isLoading}) => {

  return (
    <div className={`chnl-header ${className} ${xtraCss}`}>

    </div>
  )
}

export default ChannelHeader;
