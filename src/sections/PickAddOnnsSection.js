import { useState, useContext, useEffect } from "react";
import Addon from "../components/Addon";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Data from "../context/DataContext";

function PickAddOnnsSection() {
    const [checkboxes, setCheckboxes] = useState([{
            type:"checkbox",
            placeholder: null,
            label: "Online service",
            name:"service",
            checked: false,
            subtext: "Access to multiplayer games",
            price: 1,
        }, {
            type:"checkbox",
            placeholder: null,
            label: "Larger storage",
            name:"storage",
            checked: false,
            subtext: "Extra 1TB of cloud save",
            price: 2,
        }, {
            type:"checkbox",
            placeholder: null,
            label: "Customizable profile",
            name:"profile",
            checked: false,
            subtext: "Custom theme on your profile",
            price: 2,
        }
    ]);

    const initialUpdate = () => {
        if(!currentData.addons.length) return
        for(let addon of checkboxes) {
            for(let data of currentData.addons) {
                if(addon.label === data.name) {
                    addon.checked = true;
                } 
            }

        }
    }

    useEffect(() => {
        initialUpdate();
    }, [])

    const { currentData, setCurrentData } = useContext(Data);
    useEffect(() => {
        let addonsData = [];
        for(let input of checkboxes) {
            if(input.checked) {
                addonsData.push({name: input.label, price: input.price})
            }
        }
        setCurrentData({...currentData, addons: addonsData})
    }, [checkboxes])

    const renderedCheckboxes = checkboxes.map((input) => {
        return (
            <Addon 
                key={input.name}
                input={input}
                type={input.type} 
                placeholder={input.placeholder} 
                label={input.label} 
                setInputs={setCheckboxes} 
                inputs={checkboxes} 
                checked={input.checked} 
                name={input.name}
            />
        )
    })

    return (
        <div className="content">
            <Header
                title="Pick add-ons"
                subtitle = "Add-ons help enhance your gaming experience."
            />
            <form className="inputs-group">
                <div className="addons">
                    {renderedCheckboxes}
                </div>
                <Buttons back="SelectPlan" next="FinnishUp" />
            </form>
        </div>
    );
}

export default PickAddOnnsSection;