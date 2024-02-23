/* -- BYIMAAN -> THE FUTURE -- */

import { ReactElement } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { MdOutlineSportsEsports } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiStudent } from "react-icons/pi";
import { GiHanger } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { MdOutlineReport } from "react-icons/md";
import { LuHelpCircle } from "react-icons/lu";
import { MdFeedback } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { GrHistory } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";

interface _MenuItem{
    component: ReactElement;
    itemName: String
};

type _MenuItems = _MenuItem[]

interface _Section{
    sectionName : string | undefined,
    menuItems: _MenuItems
};

export const menuData: _Section[] = [
    {sectionName: 'Explore', menuItems: [
        {itemName: 'Trending', component:<FaArrowTrendUp/>},
        {itemName: 'Music', component: <IoIosMusicalNotes/>},
        {itemName: 'Movies & Tv', component: <BiSolidCameraMovie /> },
        {itemName: 'Sports', component: <MdOutlineSportsBaseball/>  },
        {itemName: 'Gaming', component: <MdOutlineSportsEsports/>},
        {itemName: 'Learning', component: <PiStudent />},
        {itemName: 'Fashion & Beauty', component: <GiHanger/>},
    ]},
    {
        sectionName: 'You', menuItems: [
            {itemName: 'Your Channel', component: <GrChannel />},
            {itemName: 'History', component: <GrHistory/> },
            {itemName: 'Liked videos', component: <AiFillLike /> }
        ]
    },
    {
        sectionName: undefined, menuItems: [
            {itemName: 'Setting', component: <CiSettings />},
            {itemName: 'Report', component: <MdOutlineReport /> },
            {itemName: 'Help', component: <LuHelpCircle />},
            {itemName: 'Send feedback', component: <MdFeedback />}
        ]
    },
]