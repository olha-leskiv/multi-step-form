import Header from '../components/Header'
import Input from '../components/Input'
import Buttons from '../components/Buttons'


const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
const phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gmi)

function PersonalInfoSection() {
    const inputs = [{
            type:"text",
            placeholder: "e.g. Stephen King",
            label:"Name",
            name:"name",
        }, {
            type:"email",
            placeholder: "e.g. stephenking@lorem.com",
            label:"Email Address",
            name:"email",
        }, {
            type:"number",
            placeholder: "e.g. +1 234 567 890",
            label:"Phone Number",
            name:"phone",
        },
    ]


    const renderedInputs = inputs.map((input) => {
            return (<Input 
                type={input.type} 
                placeholder={input.placeholder} 
                label={input.label} 
                key={input.name} 
                required
                className="input-text"
            />)
    }); 

    const validate = () => {
        let isValid = [];
        for(let input of document.querySelectorAll('input')) {
            input.closest('label').classList.remove("invalid");
            input.closest('label').classList.remove("error");
            input.closest('label').classList.remove("empty");

            if(input.type === "email") {
                isValid.push(emailRegex.test(input.value));
                if(!emailRegex.test(input.value)) {
                    input.closest('label').classList.add("invalid");
                    input.closest('label').classList.add("error");
                }
            }
            if(input.type === "number") {
                isValid.push(phoneRegex.test(input.value));
                if(!phoneRegex.test(input.value)) {
                    input.closest('label').classList.add("invalid");
                    input.closest('label').classList.add("error");
                }
            }
            if(!input.value) {
                isValid.push(false);
                input.closest('label').classList.add("invalid");
                input.closest('label').classList.add("empty");
            }
        }
        return !isValid.some((boolean) => boolean === false);
    }

    return (
        <div className="content">
            <Header
                title="Personal info"
                subtitle = "Please provide your name, email address, and phone number."
            />
            <form className="inputs-group personal-info">
                { renderedInputs }
                <Buttons next="SelectPlan" validate={validate} />
            </form>
        </div>
    );
}

export default PersonalInfoSection;

