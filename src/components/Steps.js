import { useContext } from "react";
import NavigationSection from "../context/NavigationSection";
import Step from "./Step";

function Steps() {
    const { currentSection } = useContext(NavigationSection);
    const steps = [
        {
            name: "personalInfo",
            number: 1,
            label: "YOUR INFO"
        },
        {
            name: "SelectPlan",
            number: 2,
            label: "SELECT PLAN"
        },
        {
            name: "PickAddOnns",
            number: 3,
            label: "ADD-ONS"
        },
        {
            name: "FinnishUp",
            number: 4,
            label: "SUMMAR"
        },
    ];

    const renderedSteps = steps.map((step) => {
        if(currentSection === step.name) {
            return <Step active number={step.number} label={step.label} key={step.number} />
        }
        return <Step number={step.number} label={step.label} key={step.number} />
    })

    return (
    <div className="steps">
        {renderedSteps}
    </div>
)
}

export default Steps;