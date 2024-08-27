"use client";
import React, { Children, createContext, useContext, useState } from 'react'

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ( {children}) => {

    return(
        <GlobalContext.Provider value="hello">
            <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);


