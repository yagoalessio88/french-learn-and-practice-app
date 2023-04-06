import React, { createContext, useContext, useState } from "react";
import { data as simplePresent } from "../data/verbsConjugationSimplePresent-data.js";
const GlobalContext = createContext();

export const DataProvider = ({ children }) => {
    const [verbsData, setVerbsData] = useState(simplePresent);
    const [verbsDataId, setVerbsDataId] = useState("simplePresent");

    return (
        <GlobalContext.Provider value={{ verbsData, setVerbsData, verbsDataId, setVerbsDataId }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useDataContext = () => {
    return useContext(GlobalContext);
}
