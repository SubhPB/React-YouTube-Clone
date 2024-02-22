/* -- BYIMAAN -> THE FUTURE -- */

import React from "react";
import { SearchBar } from "../common-jsx/HeaderYT";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchPage: React.FC = () => {

    const navigate = useNavigate();

    const goBack = () => { navigate(-1); };

    return (
        <div className="search-page h-screen w-full bg-zinc-900 p-[1.65vmax]">
            <div className="search-header w-full flex gap-5 items-center justify-center">
                <IoMdArrowRoundBack onClick ={goBack} className=" h-7 min-w-7 text-2xl cursor-pointer text-white "/>
                <SearchBar xtraCss='text-black bg-zinc-100 flex w-[80%]' inputCss="w-[95%]"/>
            </div>
        </div>
    );
};

export default SearchPage;

