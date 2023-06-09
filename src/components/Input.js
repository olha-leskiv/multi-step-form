import { useState, useEffect } from 'react'
import { useContext } from 'react';
import Data from "../context/DataContext";

function Input({ type, placeholder, label, name, setInputs, inputs, checked, required, className }) {
    const [value, setValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        if(type === 'radio') {
            const updatedRadio = inputs.map((input) => {
                if(e.target.name === input.name) {
                    return {...input, checked: true}
                } else {
                    return {...input, checked: false}
                }
            })
            setInputs(updatedRadio)
        }
        if(type === 'checkbox') {
            const updatedCheckbox = inputs.map((input) => {
                if(e.target.name !== input.name) return input;
                let checked = !input.checked;
                    return {...input, checked: checked}
                })
            setInputs(updatedCheckbox)
        }

        setValue(e.target.value)
    }

    const initialUpdate = () => {
            for(let data in currentData.user) {
                if(data === type) {
                    setValue(currentData.user[data]);
                } 
            }
    }

    useEffect(() => {
        initialUpdate();
    }, [])


    const { currentData, setCurrentData } = useContext(Data);
    useEffect(() => {
        let userData = currentData.user;

        for(let input of document.querySelectorAll('input')) {
            let key = input.type;
            userData = {...userData, [key]: input.value}
        };

        setCurrentData({...currentData, user: userData})

    }, [value])

    return (
        <label className={className}>
            {label}
            <input type={type} placeholder={placeholder} value={value} onChange={handleChange} name={name} checked={checked} required={required} className={className}></input>
        </label>
    )
}

export default Input;