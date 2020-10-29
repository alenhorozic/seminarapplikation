import React from 'react'

export default function HomePage() {
    return (
        <div className="page" id="pocetna"> 
	        <div className="column" id="column-grid">
		        <div className="dark-box" id="grid-a">
				   <h1>Sign-To-Seminar</h1>
			       <p>Like administrator you can create new seminar, edit seminar and se all bookd visitors
                   you can edit seminar</p>
			       <p>Like visitor you can se all komming seminar and se info about this 
				   you can book your cher on seminar</p>
				   <a className="red-text" href="http://localhost:3000/seminars">Go To Seminars</a>
			    </div>
			    <div className="side-box" id="grid-b">
				    <h4>Email</h4>
				    <a className="red-text" href="mailto:info@signtoseminar.com">Info</a><br></br>
				    <a className="red-text" href="mailto:support@signtoseminar.com">Support</a><br></br>
				    <a className="red-text" href="mailto:booking@signtoseminar.com">Booking</a>
			    </div>
		    </div>
	    </div>
	)
}
