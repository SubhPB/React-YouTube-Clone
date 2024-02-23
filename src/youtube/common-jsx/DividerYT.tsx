/* -- BYIMAAN -> THE FUTURE -- */

import React, { ReactNode } from 'react'

interface DividerProp {
    children ?: ReactNode
}

const DividerYT:React.FC<DividerProp> = ({children}) => {
  return (
    <div className='divider-yt flex-grow-[1] flex flex-col lg:flex-row-reverse'>
      {children}
    </div>
  )
};

export default DividerYT
