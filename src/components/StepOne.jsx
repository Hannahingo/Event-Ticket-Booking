import { useEffect, useState } from "react"

const StepOne = ({nextStep}) => {
    const [ticketType, setTicketType] = useState([
        {
            name: 'REGULAR ACCESS',
            price: 0,
            quantity: 20,
            id: 1
        },
        {
            name: 'VIP ACCESS',
            price: 50,
            quantity: 20,
            id: 2
        },
        {
            name: 'VVIP ACCESS',
            price: 150,
            quantity: 20,
            id: 3
        }

    ])

    const [selectedTicket, setSelectedTicket] = useState(1)
    const [numOfTickets, setNumOfTickets] = useState(1)

    const handleChange =  (event) => {
        setNumOfTickets(event.target.value)
    }


    const handleNext = ()  => {
        nextStep(
            {
                ticketType: selectedTicket,
                noOfTickets: numOfTickets
            }
        )
    }
    return (
        <div className="stepOne">
            <div className="stepOne-banner">
                <h1 className="stepOne-banner__heading">Techember Fest "25</h1>
                <p className="stepOne-banner__text">Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
            </div>
            <div>
                <p>Select ticket type</p>
                <div className="ticket-container">
                    {
                        ticketType.map((ticket, i) => 
                            <div 
                                className={`regular-ticket ${selectedTicket == ticket.id  && 'active-ticket'}`} 
                                key={ticket.id} 
                                onClick={()=>{setSelectedTicket(ticket.id)}}
                            >
                                <p>{ticket.name}</p>
                                <p>{ticket.price}</p>
                                <p>{ticket.quantity}</p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="ticket-num-cont">
                <p className="content">Number of tickets</p>
                <select id='num' name='number' onChange={handleChange}>
                    <option value="1" defaultValue>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div className="buttons">
                <button className="primary-button">Cancel</button>
                <button className="secondary-button" onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}


export default StepOne;