import { useContext } from "react";
import NavigationSection from "../context/NavigationSection";


function Link({ toSection, children, className }) {
    const { setCurrentSection } = useContext(NavigationSection);

    const handleClick = (e) => {
        e.preventDefault();
        setCurrentSection(toSection)
    }

    return (
    <a className={className} onClick={handleClick}>{children}</a>
)
}

export default Link;