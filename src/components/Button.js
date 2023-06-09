import { useContext } from "react";
import NavigationSection from "../context/NavigationSection";


function Button({ toSection, children, className, validate }) {
    const { setCurrentSection } = useContext(NavigationSection);

    const handleClick = (e) => {
        e.preventDefault();
        if(validate) {
            // console.log(validate());
            if(!validate()) return;
        }
        setCurrentSection(toSection);
    }

    return (
    <button className={className} onClick={handleClick}>{children}</button>
)
}

export default Button;