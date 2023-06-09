import { createContext, useState } from "react";

const NavigationSection = createContext();

function SectionProvider({ children }) {
    const [currentSection, setCurrentSection] = useState('personalInfo')
    
    return (
    <NavigationSection.Provider value={{ currentSection, setCurrentSection }}>
        {children}
    </NavigationSection.Provider>);
}

export {SectionProvider};
export default NavigationSection;