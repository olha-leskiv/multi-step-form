import { useState, useContext } from "react";
import Input from "../components/Input";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Link from "../components/Link.js";
import Data from "../context/DataContext";


function FinnishUpSection() {
    const { currentData } = useContext(Data);

    let total = currentData.plan.price;

    const renderedAddons = currentData.addons.map((addon) => {
        total = total + addon.price;
        return (
        <div key={addon.name} className="finnish-addon">
            <p className="small">{addon.name}</p>
            <p className="small dark">+${currentData.monthly ? addon.price : (addon.price * 10)}/{currentData.monthly ? "mo" : "yr"}</p>
        </div>)
    })


    return (
        <div className="content finnish">
            <Header
                title="Finishing up"
                subtitle = "Double-check everything looks OK before confirming."
            />
            <div>
                <div className="top">
                    <div  className="finnish-plan">
                        <div >
                            <h2>{currentData.plan.label}({currentData.monthly ? "Monthly" : "Yearly"})</h2>
                            <Link toSection="SelectPlan">Change</Link>
                        </div>
                        <h2>{currentData.monthly ? "$" + currentData.plan.price + "/mo" : "$"+ (currentData.plan.price * 10) + "/yr"}</h2>
                    </div>
                    {renderedAddons}
                </div>
            <div className="total">
               <p className="small">Total ({currentData.monthly ? "per month" : "per year"})</p>
               <p className="big">{currentData.monthly ? "$" + total + "/mo" : "$"+ (total * 10) + "/yr"}</p> 
            </div>
            </div>

            <form className="inputs-group">
                <Buttons back="PickAddOnns" next="ThankYou" confirm/>
            </form>
        </div>
    );
}

export default FinnishUpSection;