import Header from '../components/Header';
import Input from '../components/Input';
import Switch from '../components/Switch';
import Button from '../components/Button';
import Buttons from '../components/Buttons';
import { useState, useContext, useEffect } from 'react';
import Data from "../context/DataContext";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";

function SelectPlanSection() {
    const { currentData, setCurrentData } = useContext(Data);

    const [radios, setRadios] = useState([{
            type:"radio",
            placeholder: null,
            label:"Arcade",
            name:"arcade",
            checked: true,
            price: 9,
            img: arcadeImg,
        }, {
            type:"radio",
            placeholder: null,
            label:"Advanced",
            name:"advanced",
            checked: false,
            price: 12,
            img: advancedImg,
        }, {
            type:"radio",
            placeholder: "e.g. +1 234 567 890",
            label:"Pro",
            name:"Pro",
            checked: false,
            price: 15,
            img: proImg,
        },
    ]);

    const [checkbox, setCheckbox] = useState([{
        type:"checkbox",
        placeholder: null,
        label:"",
        name:"billing",
        checked: true,
    }
]);

    const initialUpdate = () => {
        for(let check of checkbox) {
            check.checked = currentData.monthly;
        }
        
        if(!currentData.plan) return
        for(let radio of radios) {
            if(radio.name === currentData.plan.name) {
                radio.checked = true;
            } else {
                radio.checked = false;
            }
        }


    }

    useEffect(() => {
        initialUpdate();
    }, [])




    const renderedRadio = radios.map((input) => {
        return (
            <div className={input.checked ? "plan checked" : "plan"} key={input.name}>
                <img src={input.img} alt={input.label}></img>
                <div>
                    <Input 
                        type={input.type} 
                        placeholder={input.placeholder} 
                        label={input.label} 
                        key={input.name} 
                        setInputs={setRadios} 
                        inputs={radios} 
                        checked={input.checked} 
                        name={input.name}
                    />
                    <p className='small'>{currentData.monthly ? "$" + input.price + "/mo" : "$" + (input.price * 10) + "/yr"}</p>
                    {!currentData.monthly && <p className='extra-small'>2 months free</p>}
                </div>
            </div>
        )
    })

    const renderedCheckbox = checkbox.map((input) => {
        return (
            <div className='period' key={input.name}>
                <h4 className={currentData.monthly ? "active" : undefined} >Monthly</h4>
                <Switch 
                    type={input.type} 
                    placeholder={input.placeholder} 
                    label={input.label} 
                    key={input.name} 
                    setInputs={setCheckbox} 
                    inputs={checkbox} 
                    checked={input.checked} 
                    name={input.name}
                />
                <h4 className={!currentData.monthly ? "active" : undefined}>Yearly</h4>
            </div>
        )
    })

  
    useEffect(() => {
        let planData;
        for(let input of radios) {
            if(input.checked) {
                planData = input;
            }
        }
        setCurrentData({...currentData, plan: planData, monthly: checkbox[0].checked})
    }, [radios, checkbox]);




    return (
    <div className="content plan">
        <Header
            title="Select your plan"
            subtitle = "You have the option of monthly or yearly billing."
        />
        <form>
            <div>
                <div className='plans'>
                    {renderedRadio}
                </div>
                {renderedCheckbox}
            </div>
            <Buttons back="personalInfo" next="PickAddOnns" />
        </form>
    </div>);
}

export default SelectPlanSection;