import { useContext } from "react";
import NavigationSection from "../context/NavigationSection";

function Route({ section, children }) {
    const { currentSection } = useContext(NavigationSection);

    if(section === currentSection) {
        return <div>{children}</div>
    }

    return null;
}

export default Route;