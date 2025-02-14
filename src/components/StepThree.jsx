const StepThree = ({goBack}) => {

    const handleBack = () => {
        goBack()
    }

    return (
        <div>
            <div ticket-container>
                <h2 clsName="ticket-content-one">Your Ticket is Booked!</h2>
                <p className="ticket-content-two">You can download or Check your email for a copy</p>
          <div>
            <h1 className="techember">Techember <br /> Fest ”25</h1>
            <p className="location"> 04 Rumens road, Ikoyi, Lagos</p>
            <p className="time">March 15, 2025 | 7:00 PM</p>
            <img src="User.img.jpg" alt="" />
            <div className="info-box">
            <div>
            <p>Enter your name</p>
            <p><strong>Avi Chukwu</strong></p>
          <div>
            <p>Enter your email</p>
            <p><strong>User@gmail.com</strong></p>
          </div>
          <div>
            <p>Ticket Type:</p>
            <p>vip</p>
          </div>
          <div>
            <p>Ticket for:</p>
            <p>1</p>
            </div>
          </div>
          </div>
            <div className="request-container">
                <p className="request">Special request?</p>
                <p className="request-content">Nil ? Or the users sad story they write in there gets this whole space, Max of three rows</p>
            </div>
            </div>
            </div>
            <div className="buttons">
                <button className="primary-button" onClick={handleBack}>Book Another Ticket</button>
                <button className="secondary-button" >Download Ticket</button>
            </div>
        </div>
    )
}

export default StepThree