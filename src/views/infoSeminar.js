import React, { Component } from 'react'

export default class infoSeminar extends Component {
	constructor() {
		super();
		this.state = {seminars:null};
	 }
	 componentDidMount() {
		this.fetchSeminar();
	 }
	 componentDidUpdate(prevProp) {
		if(this.props.id !== prevProp.id){
			this.fetchSeminar();
		}
	 }
	 fetchSeminar() {
		 if(this.props.id) {
		fetch("https://localhost:5001/api/seminars/"+this.props.id)
		.then((response)=>response.json())
		.then((json)=>this.setState({seminar: json}));
		 }
	 }

	render(){
    return (
        <div className="page" id="pocetna">
	    <div className="column" id="column-grid">
		     <div className="dark-box" id="grid-a">
				 {this.state.seminar != null ? 
                <h1>{this.state.seminar.name}</h1> : null}

                 {this.state.seminar != null ? 
                <h4>Topic: {this.state.seminar.topic}</h4> : null}

                 {this.state.seminar != null ? 
                <h4>Speaker: {this.state.seminar.speaker}</h4> : null}

                 {this.state.seminar != null ?
                <h4>Date And Clock: {this.state.seminar.dateAndTime}</h4> : null}

                 {this.state.seminar != null ?
                <h4>Duration Time: {this.state.seminar.durationTime}</h4> : null}

                 {this.state.seminar != null ?
                <h4>Address: {this.state.seminar.address}</h4> : null}

                {this.state.seminar != null ?
                <h4>Sal: {this.state.seminar.sal}</h4> : null}

                 {this.state.seminar != null ?
                <h4>Seats: {this.state.seminar.numberOfSeats}</h4> : null}
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
