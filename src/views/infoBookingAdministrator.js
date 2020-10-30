import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default class InfoBookingAdministrator extends Component {
	
	constructor(props) {
		super();
    this.state = {params: props.match.params,
      editBooking: {
        visible: false,
        id:0,
        name:"",
        surname:"",
        email:"",
        phone:"",
    }
    };
	 }
	 componentDidMount() {
		console.log(this.props.match.params.id)
		this.fetchBooking();
	 }
	 fetchBooking() {
		fetch("https://localhost:5001/api/booking/" + this.state.params.id)
		.then((response)=>response.json())
		.then((json)=>this.setState({booking: json,}));
		}

	render(){
    return (
        <div className="page" id="pocetna">
	    <div className="column" id="column-grid">
		     <div className="dark-box" id="grid-a">
				 {this.state.booking != null ? 
                <h1>Booking Info id:{this.state.booking.id}</h1> : null}

                 {this.state.booking != null ? 
                <h4>Name: {this.state.booking.name}</h4> : null}

                 {this.state.booking != null ? 
                <h4>Surname: {this.state.booking.surname}</h4> : null}

                 {this.state.booking != null ?
                <h4>Email: {this.state.booking.email}</h4> : null}

                 {this.state.booking != null ?
                <h4>PhoneNumber: {this.state.booking.phone}</h4> : null}

                 {this.state.booking != null ?
                <h4>Seminar Id: {this.state.booking.seminarId}</h4> : null}
			 </div>

        <div className="side-box" id="grid-b">
                <h3>Booking</h3>
            <div  className="side-box-button">
            <Button variant="danger" size="lg"
                  onClick={()=>this.deleteBooking()}>
                  Delete Booking
            </Button>
            </div>	
            <div  className="side-box-button">
            <Button variant="primary" size="lg"
                 onClick={()=>this.showEditBooking()}>
                 Edit Booking
            </Button>
            </div>		
		</div>
	</div>

    <Modal size="sl" centered show={this.state.editBooking.visible}onHide={()=>this.setEditBookingVisibleState(false)}>
          <Modal.Header>
              <Modal.Title>Edit Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group>
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control id="name" type="text" value={this.state.editBooking.name.toString()}
                  onChange={(e) =>this.setEditBookingStringFildState("name",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="surname">Surname</Form.Label>
                  <Form.Control id="surname" type="text" value={this.state.editBooking.surname.toString()}
                  onChange={(e) =>this.setEditBookingStringFildState("surname",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control id="email" type="text" value={this.state.editBooking.email.toString()} 
                  onChange={(e) =>this.setEditBookingStringFildState("email",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="phone">PhoneNumber</Form.Label>
                  <Form.Control id="phone" type="text" value={this.state.editBooking.phone.toString()}
                  onChange={(e) =>this.setEditBookingStringFildState("phone",e.target.value)}>
                  </Form.Control>
              </Form.Group>
              
                <Button className="btn  btn-primary btn-block"
                  onClick={()=>this.doEditBooking()}>
                  Edit Booking
                </Button>
          </Modal.Body>
      </Modal>

	</div>
  )
  }
  /*delete bookong*/
  deleteBooking(){
    if(!window.confirm('Are You Sure ????? All Bookings Data Will Be Loost')){
      return;
  }
       var url ="https://localhost:5001/api/booking/" + this.state.params.id;
    fetch(url, {
    method: 'DELETE', // DELETE
    headers: {
    'Content-Type': 'application/json',
    }
    })
    .then(()=>this.fetchBooking())
    .catch((error) => {
      console.error('Error:NOT IS WRONG', error);
    })
    window.location.reload();
  }
  
  
  /*EDIT BOOKING ADMINISTRATOR starts heare*/
  showEditBooking(){
    this.setEditBookingStringFildState('name',this.state.booking.name);
    this.setEditBookingStringFildState('surname',this.state.booking.surname);
    this.setEditBookingStringFildState('email',this.state.booking.email);
    this.setEditBookingStringFildState('phone',this.state.booking.phone);
    this.setEditBookingVisibleState(true);
}
setEditBookingVisibleState(newState){
  this.setState(Object.assign(this.state,
      Object.assign(this.state.editBooking, {
          visible: newState,
      })
  ));
}
   setEditBookingStringFildState(fildName, newValue){
    this.setState(Object.assign(this.state,
        Object.assign(this.state.editBooking, {
            [fildName] :  newValue 
        })
    ));
}
    setEditBookingNumberFildState(fildName, newValue){
    this.setState(Object.assign(this.state,
        Object.assign(this.state.editBooking, {
            [fildName] : Number( newValue )
        })
    ));
}
doEditBooking(){
  if(!window.confirm('Are You Sure ????? You Go Editing This Booking')){
    return;
}
  var data = {
    name: this.state.editBooking.name,
    surname: this.state.editBooking.surname,
    email: this.state.editBooking.email,
    phone: this.state.editBooking.phone,
     };
     var url ='https://localhost:5001/api/booking/'+ this.state.params.id;
  fetch(url, {
  method: 'PUT', // or 'PUT' TO EDIT Booking
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  })
  .then(() => this.fetchBooking())
  .catch((error) => {
    console.error('Error:NOT IS WRONG', error);
  });
  this.setEditBookingVisibleState(false);
}
}
