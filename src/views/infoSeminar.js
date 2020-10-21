import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export default class InfoSeminar extends Component {
	
	constructor(props) {
		super();
		this.state = {params: props.match.params};
	 }
	 componentDidMount() {
		console.log(this.props.match.params.id)
		this.fetchSeminar();
	 }
	 componentDidUpdate(prevProp) {
			this.fetchSeminar();
		}
	 fetchSeminar() {
		fetch("https://localhost:5001/api/seminars/" + this.state.params.id)
		.then((response)=>response.json())
		.then((json)=>this.setState({seminar: json}));
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
				 <h3>Booking </h3>

				<Form>

				 <Form.Group controlId="forname">
                 <Form.Control size="sm" type="text" placeholder="Enter Forname" />
                 </Form.Group>

				 <Form.Group controlId="surname">
                 <Form.Control size="sm" type="text" placeholder="Enter Surname" />
                 </Form.Group>

                 <Form.Group controlId="Email">
                 <Form.Control size="sm" type="email" placeholder="Enter E-mail" />
                 </Form.Group>

				 <Form.Group controlId="phonrMumber">
                 <Form.Control  size="sm" type="text" placeholder="Enter PhoneNr" />
                 </Form.Group>

                 <Button  size="sm" variant="primary" type="submit">
                  Send Booking
                 </Button>
                </Form>
			 </div>
		</div>
	  </div>
	)
  }
}
