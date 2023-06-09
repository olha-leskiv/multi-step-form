function Step({ number, label, active}) {
    let className = "circle";
    if(active) {
        className="active circle"
    };

    return (
        <div className="step">
            <div className={className}>
                <h5>{number}</h5>
            </div>
            <div>
                <h6>Step {number}</h6>
                <h5>{label}</h5>
            </div>
        </div>
    )
}
export default Step;