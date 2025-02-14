import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { useState, useEffect } from "react";

const Selector = () => {
    // Load from local storage
    const storedData = JSON.parse(localStorage.getItem("ticketData")) || {
        ticketType: null,
        noOfTickets: 1,
        name: '',
        email: '',
        about: '',
        profileImg: '',
    };
    const storedStep = JSON.parse(localStorage.getItem("activeStep")) || 1;

    const [active, setActive] = useState(storedStep);
    const [ticket, setTicket] = useState(storedData);

    // Save to localStorage when ticket or active step changes
    useEffect(() => {
        localStorage.setItem("ticketData", JSON.stringify(ticket));
        localStorage.setItem("activeStep", JSON.stringify(active));
    }, [ticket, active]);

    // Handle Step 1 Submission
    const handleStepOne = (data) => {
        setActive(2);
        setTicket({ ...ticket, ...data });
    };

    // Handle Step 2 Submission
    const handleStepTwo = (data) => {
        setTicket({ ...ticket, ...data });
        setActive(3);
    };

    const goBack = () => {
        localStorage.removeItem("ticketData");
        localStorage.removeItem("activeStep");
        setTicket({
            ticketType: null,
            noOfTickets: 1,
            name: '',
            email: '',
            about: '',
            profileImg: '',
        });
        setActive(1);
    };

    return (
        <div className="selector">
            <div className="selector-header">
                <h1 className="selector-heading">
                    {active === 1 && "Ticket Selection"}
                    {active === 2 && "Attendee Details"}
                    {active === 3 && "Ready"}
                </h1>
                <p className="selector-step">
                    {active === 1 && "1/3"}
                    {active === 2 && "2/3"}
                    {active === 3 && "3/3"}
                </p>
            </div>
            <hr/>

            <div>
                {active === 1 && <StepOne nextStep={handleStepOne} />}
                {active === 2 && <StepTwo goBack={goBack} nextStep={handleStepTwo} ticket={ticket} />}
                {active === 3 && <StepThree goBack={goBack} ticket={ticket}/>}
            </div>
        </div>
    );
};

export default Selector;
