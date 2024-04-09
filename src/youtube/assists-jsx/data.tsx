/* -- BYIMAAN -> THE FUTURE -- */

import { ReactElement } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { MdOutlineSportsEsports } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiStudent } from "react-icons/pi";
import { GiHanger } from "react-icons/gi";
import { MdFeedback } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { DiReact } from "react-icons/di";

export interface _MenuItem{
    component: ReactElement;
    itemName: string;
    url ?: string;
    onClick ?: Function;
};

type _MenuItems = _MenuItem[]

interface _Section{
    sectionName : string | undefined,
    menuItems: _MenuItems
};

export const menuData: _Section[] = [
    {sectionName: 'Explore', menuItems: [
        {itemName: 'Trending', component:<FaArrowTrendUp/>, url: '/query/trending'},
        {itemName: 'Music', component: <IoIosMusicalNotes/>, url: '/query/music'},
        {itemName: 'Movies & Tv', component: <BiSolidCameraMovie />, url: '/query/movies%20and%20tv%20shows' },
        {itemName: 'Sports', component: <MdOutlineSportsBaseball/>, url: '/query/sports'  },
        {itemName: 'Gaming', component: <MdOutlineSportsEsports/>, url: '/query/gaming'},
        {itemName: 'Learning', component: <PiStudent />, url: '/query/learning'},
        {itemName: 'Fashion & Beauty', component: <GiHanger/>, url: '/query/fashion%20and%20beauty'},
    ]},
    {
        sectionName: 'You', menuItems: [
            // {itemName: 'Your Channel', component: <GrChannel />}, currently not available....
            {itemName: 'History', component: <GrHistory/>, url: '/user/you/history' },
            {itemName: 'Liked videos', component: <AiFillLike />, url: '/user/you/liked-videos' }
        ]
    },
    {
        sectionName: undefined, menuItems: [
            {itemName: 'Github', component: <FaGithub />, onClick: () => window.open('https://github.com/SubhPB/React-YouTube-Clone', '_blank', 'noopener,noreferrer')},
            {itemName: 'Developer', component: <DiReact />, onClick: () => window.open('https://subhpb.github.io/Portfolio/', '_blank', 'noopener,noreferrer')},
            {itemName: 'Send feedback', component: <MdFeedback />, onClick: () => window.open('mailto:byimaan1@gmail.com','_blank')}
        ]
    },
]