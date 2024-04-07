/* -- BYIMAAN -> THE FUTURE -- */


import React from 'react'
import { UserProp } from '../User';
import { YouPageHeader, NoYouPageData } from '../you-page/History';


function Subcriptions({className='',xtraCss='' }:UserProp) {
    const noData = true;
    return (
        <div  className={`subcription h-full w-full  ${className} ${xtraCss}`}>
            <YouPageHeader text='Subcriptions' />
            {
                noData ? <NoYouPageData text='You Have Not Subcribed Any Channel' /> 
                : <>My Channel Content </>
            }
        </div>
    );
}

export default Subcriptions
