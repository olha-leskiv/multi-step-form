import { useState } from 'react'

function Switch({ type, placeholder, name, setInputs, inputs, checked, required }) {
    const [value, setValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);

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
        <label className="switch">
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={handleChange} 
                name={name} 
                checked={checked} 
                required={required} 
            ></input>
            <span className="slider round"></span>
        </label>
    )
}

export default Switch;