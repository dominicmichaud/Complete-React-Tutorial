import React, { useState, createContext } from 'react';

const initialState = {
    postCreated: false,
    postUpdated: false,
    postDeleted: false,
    apiError: false,
    apiErrorType: '',
    shoudRefetch: false,
};

export const Context = createContext();

const Store = ({ children }) => {
    const [gState, setGState] = useState(initialState);
    return (
        <Context.Provider value={[gState, setGState]}>
            {children}
        </Context.Provider>
    );
}

export default Store;