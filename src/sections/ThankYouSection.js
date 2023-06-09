import thanksIcon from "../assets/images/icon-thank-you.svg"

function ThankYouSection() {

    return (
    <div className="content thanks">
        <img src={thanksIcon}></img>
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>);
}

export default ThankYouSection;