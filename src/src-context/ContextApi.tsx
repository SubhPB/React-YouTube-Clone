/* -- BYIMAAN -> THE FUTURE -- */

import React, {createContext, useState, ReactNode, useContext} from 'react'
// import {fetchData} from '../src-utils/api'
import {obj, Func} from '../src-utils/dataTypes';

const AppContext = createContext<obj<ContextType> | undefined >(undefined);

interface ProviderProps {
    children?: ReactNode
};

type ContextType = {
    get: boolean,
    set: React.Dispatch<React.SetStateAction<boolean>>
};

const AppContextProvider: React.FC< ProviderProps > = ({children}) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [queryResults, setQueryResults] = useState<boolean>(false);
    const [categories, setCategories] = useState<boolean>(false);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    const contextProps: obj<ContextType> = {
        useLoading: {
            get: loading,
            set: setLoading
        },
        useQuery: {
            get: queryResults,
            set: setQueryResults,
        },
        useCategory: {
            get: categories,
            set: setCategories
        },
        useMobile: {
            get: mobileMenu,
            set: setMobileMenu,
        }
    };

    const fetchCategories : Func<[]> = () => {};

    // useEffect( () => {
    // later ...
    // }, [categories] );

    return (
        <AppContext.Provider value={contextProps}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
