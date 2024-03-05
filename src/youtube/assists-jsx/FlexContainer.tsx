/* -- BYIMAAN -> THE FUTURE -- */

import React, {useEffect, useRef} from 'react';
import { CmnProps } from './Assists';


function FlexContainer({ className = 'flex w-full h-full flex-wrap flex-shrink-0', xtraCss = '', children, componentDidMount= () => {}, componentWillUnMount = () => {} }: CmnProps<any>): JSX.Element {

  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    componentDidMount(myRef.current);
    
    return () => {
      componentWillUnMount(myRef.current); 
    }

  }, [])
  return (
    <div ref={myRef} className={`flex-container ${className} ${xtraCss}`}>
      {children}
    </div>
  );
};

export default FlexContainer
