import React, { createContext } from 'react';
export const AllContext = createContext()

const GlobalContext = ({children}) => {
    return (
        <AllContext.Provider>
            {children}
        </AllContext.Provider>
    );
};

export default GlobalContext;