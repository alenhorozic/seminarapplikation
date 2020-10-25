import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default class InfoSeminarAdministrator extends Component {
	
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
    },editModal: {
        visible: false,
        name:"",
        topic:"",
        speaker:"",
        dateAndTime:"",
        durationTime:"",
        address:"",
        sal:"",
        numberOfSeats:0,
        status:0,
    },    
    };
	 }
	 componentDidMount() {
		console.log(this.props.match.params.id)
		this.fetchSeminar();
	 }
	 fetchSeminar() {
		fetch("https://localhost:5001/api/seminars/" + this.state.params.id)
		.then((response)=>response.json())
		.then((json)=>this.setState({seminar: json,}));
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

                  <div  className="dark-box-button">
                    <Button variant="primary" size="sm"
                        onClick={()=>this.showEditModalSeminar()}>
                         Edit Seminar
                    </Button>
                  </div>
                    <div  className="dark-box-button">
                    <Button variant="primary" size="sm"
                        onClick={()=>this.deleteSeminar()}>
                         Delete Seminar
                    </Button>
                  </div> 

			 </div>

        <div className="side-box" id="grid-b">
                <h3>Booking</h3>
            <div  className="side-box-button">
            <Button variant="primary" size="lg"
                  onClick={()=>this.showAddBooking()}>
                  Add New Booking
            </Button>
            </div>	
            <div  className="side-box-button">
            <Button variant="primary" size="lg"
                  href="http://localhost:3000/bookingsAdministrator">
                  Show All Bookings
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
      
      <Modal size="sl" centered show={this.state.editModal.visible}onHide={()=>this.setEditModalVisibleState(false)}>
          <Modal.Header>
              <Modal.Title>ADD New Seminar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group>
                  <Form.Label htmlFor="name">Seminar Name</Form.Label>
                  <Form.Control id="name" type="text" value={this.state.editModal.name.toString()}
                  onChange={(e) =>this.setEditModalStringFildState("name",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="topic">Topic</Form.Label>
                  <Form.Control id="topic" type="text" value={this.state.editModal.topic.toString()}
                  onChange={(e) =>this.setEditModalStringFildState("topic",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="speaker">Speaker</Form.Label>
                  <Form.Control id="speaker" type="text" value={this.state.editModal.speaker.toString()} 
                  onChange={(e) =>this.setEditModalStringFildState("speaker",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="dateAndTime">Date And Time as format yyyy-mm-ddThh:mm:ss</Form.Label>
                  <Form.Control id="dateAndTime" type="text" value={this.state.editModal.dateAndTime.toString()}
                  onChange={(e) =>this.setEditModalStringFildState("dateAndTime",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="durationTime">Duration Time</Form.Label>
                  <Form.Control id="durationTime" type="text" value={this.state.editModal.durationTime.toString()}
                  onChange={(e) =>this.setEditModalStringFildState("durationTime",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="address">Address</Form.Label>
                  <Form.Control id="address" type="text" value={this.state.editModal.address.toString()}
                  onChange={(e) =>this.setEditModalStringFildState("address",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="sal">Sal</Form.Label>
                  <Form.Control id="sal" type="text" value={this.state.editModal.sal.toString()}
                  onChange={(e) =>this.setEditModalStringFildState("sal",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="numberOfSeats">Number Of Seats</Form.Label>
                  <Form.Control id="numberOfSeats" type="number" value={this.state.editModal.numberOfSeats.toString()}
                  onChange={(e) =>this.setEditModalNumberFildState("numberOfSeats",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="status">Status</Form.Label>
                  <Form.Control id="status" type="number" value={this.state.editModal.status.toString()}
                  onChange={(e) =>this.setEditModalNumberFildState("status",e.target.value)}>
                  </Form.Control>
              </Form.Group>
              
                <Button className="btn  btn-primary btn-block"
                  onClick={()=>this.doEditSeminar()}>
                  Edit Seminar
                </Button>
          </Modal.Body>
      </Modal>

	  </div>
	)
  }/*ADD BOOKING ADMINISTRATOR starts heare*/
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
}/*DELETE SEMINAR*/
deleteSeminar(){
  if(!window.confirm('Are You Sure ????? All Seminar Data And Bookings Data Will Be Loost')){
    return;
}
     var url ="https://localhost:5001/api/seminars/" + this.state.params.id;
  fetch(url, {
  method: 'DELETE', // DELETE
  headers: {
  'Content-Type': 'application/json',
  }
  })
  .catch((error) => {
    console.error('Error:NOT IS WRONG', error);
  });
}/*EDIT SEMINAR*/
showEditModalSeminar(){
  this.setEditModalStringFildState('name',this.state.seminar.name);
  this.setEditModalStringFildState('topic',this.state.seminar.topic);
  this.setEditModalStringFildState('speaker',this.state.seminar.speaker);
  this.setEditModalStringFildState('dateAndTime',this.state.seminar.dateAndTime);
  this.setEditModalStringFildState('durationTime',this.state.seminar.durationTime);
  this.setEditModalStringFildState('address',this.state.seminar.address);
  this.setEditModalStringFildState('sal',this.state.seminar.sal);
  this.setEditModalNumberFildState("numberOfSeats",this.state.seminar.numberOfSeats);
  this.setEditModalNumberFildState("status",this.state.seminar.status);
  this.setEditModalVisibleState(true);
 }
 setEditModalVisibleState(newState){
  this.setState(Object.assign(this.state,
      Object.assign(this.state.editModal, {
          visible: newState,
      })
  ));
}
  setEditModalStringFildState(fildName, newValue){
  this.setState(Object.assign(this.state,
      Object.assign(this.state.editModal, {
          [fildName] :  newValue 
      })
  ));
}
  setEditModalNumberFildState(fildName, newValue){
  this.setState(Object.assign(this.state,
      Object.assign(this.state.editModal, {
          [fildName] : Number( newValue )
      })
  ));
}
doEditSeminar(){
  if(!window.confirm('Are You Sure ?????')){
    return;
}
  var editdData = {
      name: this.state.editModal.name,
      topic: this.state.editModal.topic,
      speaker: this.state.editModal.speaker,
      dateAndTime: this.state.editModal.dateAndTime,
      durationTime: this.state.editModal.durationTime,
      address:this.state.editModal.address,
      sal:this.state.editModal.sal,
      numberOfSeats:this.state.editModal.numberOfSeats,
      status:this.state.editModal.status,
     };
     var url ='https://localhost:5001/api/seminars/' + this.state.params.id;
  fetch(url, {
  method: 'PUT', // or 'PUT' TO EDIT SEMINAR
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(editdData),
  })
  .catch((error) => {
    console.error('Error:NOT IS WRONG', error);
  });
  this.setEditModalVisibleState(false);
}
}
