import { createContext, useState } from "react";

const Data = createContext();

function DataProvider({ children }) {
    const [currentData, setCurrentData] = useState({
        plan: null,
        addons: [],
        step: 1,
        user: null,
        monthly: false
    })

    return (
    <Data.Provider value={{ currentData, setCurrentData }}>
        {children}
    </Data.Provider>);
}

export {DataProvider};
export default Data;