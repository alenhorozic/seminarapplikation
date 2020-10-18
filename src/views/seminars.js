import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Seminars extends Component {
   constructor(props) {
      super();
      this.state = {seminars: [] };
   }
   componentDidMount() {
      this.fetchSeminars();
   }
   fetchSeminars() {
      fetch("https://localhost:5001/api/seminars/")
      .then((response)=>response.json())
      .then((json)=>this.setState({seminars: json}))
   }
   handleClickEvent(id) {
      console.log(id);
   }
   render(){
    return (
        <div  className="page" id="pocetna">
	    <div className="column" id="column-grid">
		     <div className="dark-box" id="grid-a">
                <h1>Sing-To-Seminar</h1>                       
                <ul>
                    {this.state.seminars.map((item) => (
                    <li key={item.id} ><Link className="red-text" to={`/infoSeminar/${item.id}`}>{item.name}</Link></li>
                    ))}
                </ul> 
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
}
