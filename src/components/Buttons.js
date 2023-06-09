import { useContext } from "react";
import NavigationSection from "../context/NavigationSection";
import Button from "./Button";

function Buttons({ back, next, confirm, validate }) {
    let nextLabel = "Next Step";
    let nextClassName = "secondary";
    if(confirm) {
        nextLabel= "Confirm"
        nextClassName = "primary";
    }

    return (
    <div className="buttons">
        <Button className={nextClassName}  toSection={next}  validate={validate}>{nextLabel}</Button>
        {back &&
            <Button className="tetriary" toSection={back}>Go Back</Button>
        }
    </div>
    )
}

export default Buttons;