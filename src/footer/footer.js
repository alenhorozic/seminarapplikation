import React from 'react'

export default function footer() {
    return (
        <div className="footer">
	    <div className="column">
		    <div className="footer-column align-left">
			     Alen Horozic<br></br>
				   Kongahällagatan 42A<br></br>
				   442 38 Kungälv
			  </div>
			 
			  <div className="footer-column align-center">
			     &copy; 2020<br></br>
				  Sing To Seminar<br></br>
				  www.singtoseminar.com
			  </div>
			 
			  <div className="footer-column align-right">
			    <a className="red-text" href="#">Info</a><br></br>
				  <a className="red-text" href="#">Support</a><br></br>
				  <a className="red-text" href="#">Booking</a>
			  </div>
		  </div>
	  </div>
    )
}
