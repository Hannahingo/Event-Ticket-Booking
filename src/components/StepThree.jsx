import './StepThree.css';

const StepThree = ({ goBack }) => {
    const handleBack = () => {
        goBack()
    }

    return (
        <div className="step-three-container">
        
            <div className="booking-status">
                <h2>Your Ticket is Booked!</h2>
                <p>You can download or Check your email for a copy</p>
            </div>

            <div className="step-three-ticket-container">
                <div className="ticket">
                    <div className="qr-code">
                        <img 
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                                JSON.stringify({
                                    event: "Techember Fest '25",
                                    date: "March 15, 2025",
                                    time: "7:00 PM",
                                    location: "04 Rumens road, Ikoyi, Lagos",
                                    ticketId: Math.random().toString(36).substr(2, 9)
                                })
                            )}`}
                            alt="QR Code"
                        />
                    </div>
                    
                    <div className="ticket-content">
                        <h1 className="event-title">
                            Techember<br />Fest '25
                        </h1>
                        <div className="event-details">
                            <p className="location">📍 04 Rumens road, Ikoyi, Lagos</p>
                            <p className="date">📅 March 15, 2025 | 7:00 PM</p>
                        </div>
                        
                        <div className="ticket-info">
                            <p className="ticket-label">Ticket for 1 entry only</p>
                        </div>
                    </div>

                    <div className="ticket-stub">
                        <span className="reg-tag">REG</span>
                    </div>
                </div>
            </div>

            <div className="action-buttons">
                <button 
                    className="book-another-btn"
                    onClick={handleBack}
                >
                    Book Another Ticket
                </button>
                <button className="download-btn">
                    Download Ticket
                </button>
            </div>
        </div>
    )
}

export default StepThree