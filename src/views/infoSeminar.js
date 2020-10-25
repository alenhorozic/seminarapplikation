import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default class InfoSeminar extends Component {
	
	constructor(props) {
		super();
    this.state = {params: props.match.params,
      addBooking: {
        visible: false,
        name:"",
        surname:"",
        email:"",
        phone:"",
        seminarId:0,
    }       
    };
	 }
	 componentDidMount() {
		console.log(this.props.match.params.id)
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

                {this.state.seminar != null ?
                <h4>Status: {this.state.seminar.status}</h4> : null}
			 </div>

       <div className="side-box" id="grid-b">
                <h3>Booking</h3>
            <a className="red-text" href="mailto:info@signtoseminar.com">Info</a><br></br>
				    <a className="red-text" href="mailto:support@signtoseminar.com">Support</a><br></br>
				    <a className="red-text" href="mailto:booking@signtoseminar.com">Booking</a>
            <div >
            <Button variant="primary" size="lg"
                  onClick={()=>this.showAddBooking()}>
                  Add New Booking
            </Button>
            </div>			
			 </div>
		</div>

      <Modal size="sl" centered show={this.state.addBooking.visible}onHide={()=>this.setAddBookingVisibleState(false)}>
          <Modal.Header>
              <Modal.Title>Add New Booking</Modal.Title>
          </Modal.Header>
        <Modal.Body>
				 <Form.Group>
                  <Form.Control size="sm" id="name" type="text" placeholder="Enter Forname" value={this.state.addBooking.name.toString()}
                  onChange={(e) =>this.setAddBookingStringFildState("name",e.target.value)}>
                  </Form.Control>
         </Form.Group>

				 <Form.Group>
                  <Form.Control size="sm" id="surname" type="text" placeholder="Enter Surname" value={this.state.addBooking.surname.toString()} 
                  onChange={(e) =>this.setAddBookingStringFildState("surname",e.target.value)}>
                  </Form.Control>
         </Form.Group>

         <Form.Group>
         <Form.Control size="sm" id="email" type="text" placeholder="Enter e-mail" value={this.state.addBooking.email.toString()} 
                  onChange={(e) =>this.setAddBookingStringFildState("email",e.target.value)}>
                  </Form.Control>
         </Form.Group>

				 <Form.Group>
         <Form.Control size="sm" id="phone" type="text" placeholder="Enter PhoneNumber" value={this.state.addBooking.phone.toString()} 
                  onChange={(e) =>this.setAddBookingStringFildState("phone",e.target.value)}>
                  </Form.Control>
         </Form.Group>

         <Button className="btn  btn-primary btn-block"
                  onClick={()=>this.doAddBooking()}>
                  Send Booking
          </Button>
        </Modal.Body>
      </Modal>
	  </div>
	)
  }
  showAddBooking(){
    this.setAddBookingStringFildState('forname','');
    this.setAddBookingStringFildState('surname','');
    this.setAddBookingStringFildState('email','');
    this.setAddBookingStringFildState('phone','');
    this.setAddBookingNumberFildState("seminarId",);
    this.setAddBookingVisibleState(true);
}
setAddBookingVisibleState(newState){
  this.setState(Object.assign(this.state,
      Object.assign(this.state.addBooking, {
          visible: newState,
      })
  ));
}
   setAddBookingStringFildState(fildName, newValue){
    this.setState(Object.assign(this.state,
        Object.assign(this.state.addBooking, {
            [fildName] :  newValue 
        })
    ));
}
    setAddBookingNumberFildState(fildName, newValue){
    this.setState(Object.assign(this.state,
        Object.assign(this.state.addBooking, {
            [fildName] : Number( newValue )
        })
    ));
}
doAddBooking(){
  if(!window.confirm('Are You Sure ?????')){
    return;
}
  var data = {
    name: this.state.addBooking.name,
    surname: this.state.addBooking.surname,
    email: this.state.addBooking.email,
    phone: this.state.addBooking.phone,
    seminarId: this.state.seminar.id,
     };
     var url ='https://localhost:5001/api/booking';
  fetch(url, {
  method: 'POST', // or 'PUT'
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  })
  .catch((error) => {
    console.error('Error:NOT IS WRONG', error);
  });
  this.setAddBookingVisibleState(false);
}
}
