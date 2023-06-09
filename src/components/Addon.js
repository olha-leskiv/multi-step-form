import { useState, useContext } from 'react';
import Data from "../context/DataContext";

function Addon({ input, inputs, setInputs }) {
    const [value, setValue] = useState(input.checked);
    const { currentData, setCurrentData } = useContext(Data);
    
    const handleChange = (e) => {
        const updatedCheckbox = inputs.map((input) => {
            if(e.target.name !== input.name) return input;
            let checked = !input.checked;
                return {...input, checked: checked}
            })
        setInputs(updatedCheckbox)

        setValue(e.target.value)
    }
   
    return (
        <label  className={input.checked ? "addon checked" : "addon"}>
            <div className='checkbox'></div>
            <input type={input.type} value={input.value} onChange={handleChange} name={input.name} checked={value}></input>
            <div className='text'>
                <h3>{input.label}</h3>
                <p className="small">{input.subtext}</p>
            </div>
                <p className='price small'>+${currentData.monthly ? input.price + "/mo" : input.price * 10 + "/yr"}</p>
        </label>
    )
}

export default Addon;