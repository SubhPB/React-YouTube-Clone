/* -- BYIMAAN -> THE FUTURE -- */

import { UserProp } from "../User";
import React from 'react';
import FlexContainer from "../../../assists-jsx/FlexContainer";
import { useSelector } from "react-redux";
import { selectLikedVideos } from "../../../../redux-YT/features/video/targetVideos/targetVidSelectors";
import { selectVideosByIdsFromHistory } from "../../../../redux-YT/features/history/selectors";
import { YouPageHeader, NoYouPageData } from "./History";
import { VideoCardYT } from "../../../components-jsx/VideoCardYT.tsx/VideoCardYT";

function LikedVideos({className='',xtraCss='' }:UserProp) {

  const likedVideoIds = useSelector(selectLikedVideos);
  const likedVideos = useSelector( selectVideosByIdsFromHistory(likedVideoIds) );
  const noData = likedVideos.length === 0

  return (
    <div className={`liked-vid h-full w-full  ${className} ${xtraCss}`}>
      <YouPageHeader text="Liked videos"/>
      {
        noData ? <NoYouPageData text="No Liked Video Found!" /> :
        <FlexContainer xtraCss={`pl-6`}>
          {
            likedVideos.map((content, ind) => (
              content?.type === 'video' && <VideoCardYT  key={ind} source={content?.video} isLoading={false} isSmall={true}/>
            ))
          }
        </FlexContainer>
      }
    </div>
  )
};

export default LikedVideos;
