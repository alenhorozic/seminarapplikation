import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  SearchField from '../searchField/searchField';
import { Button, Table, Modal, Form, Card} from 'react-bootstrap';

export default class SeminarsAdministrator extends Component {
   constructor(props) {
      super(props);
      this.state = {
          seminars: [],
           filtredSeminars: [],
           addModal: {
            visible: false,
            name:"",
            topic:"",
            speaker:"",
            dateAndTime:"",
            durationTime:"",
            address:"",
            sal:"",
            numberOfSeats:0,
        }
        };
   }
   
   filter(filterText){
      var outSeminars = [];
      
      this.state.seminars.forEach(item => {
         if(this.compereSearchText(item, filterText)){
             outSeminars.push(item);
         }
      });
     this.setState({filtredSeminars:outSeminars});
   }
   compereSearchText(item, filterText){
      return(item.name.toLowerCase().search(filterText.toLowerCase()) >= 0 ||
             item.topic.toLowerCase().search(filterText.toLowerCase()) >= 0
      );
   }
   componentDidMount() {
      this.fetchSeminars();
   }
   fetchSeminars() {
      fetch("https://localhost:5001/api/seminars/")
      .then((response)=>response.json())
      .then((json)=>this.setState({seminars: json, filtredSeminars: json}))
   }
   handleClickEvent(id) {
      console.log(id);
   }
   render(){
    return (
        <div  className="page" id="pocetna">
	    <div className="column" id="column">
		     <div className="dark-box" id="">
                <h1>Sing-To-Seminar</h1>
                <SearchField handleSearchChange={(text) => this.filter(text)} />

                <div class="table-wrapper-scroll-y my-custom-scrollbar" responsive hover size ="sm" bordered>
                
                <Card class="table-wrapper-scroll-y my-custom-scrollbar">
                <Card.Body>

                <Table class="table table-bordered table-striped mb-0" responsive hover size ="sm" bordered>
                        <thead>
                            
                            <tr>
                                <th>Name</th>
                                <th>Date and Time</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.filtredSeminars.map((item) => (
                            <tr>
                    <td><Link className="red-text" to={`/infoSeminarAdministrator/${item.id}`}>{item.name}</Link></td>
                    <td>{item.dateAndTime}</td>
                           </tr>
                    ))}
                        </tbody>
                    </Table>
                    <Button variant="primary" size="md" block
                        onClick={()=>this.showAddModal()}>
                         ADD Seminar
                    </Button>
                    </Card.Body>
                    </Card>
                </div>
			 </div>
		</div>
        <Modal size="sl" centered show={this.state.addModal.visible}onHide={()=>this.setAddModalVisibleState(false)}>
          <Modal.Header>
              <Modal.Title>ADD New Seminar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group>
                  <Form.Label htmlFor="name">Seminar Name</Form.Label>
                  <Form.Control id="name" type="text" value={this.state.addModal.name.toString()}
                  onChange={(e) =>this.setAddModalStringFildState("name",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="topic">Topic</Form.Label>
                  <Form.Control id="topic" type="text" value={this.state.addModal.topic.toString()}
                  onChange={(e) =>this.setAddModalStringFildState("topic",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="speaker">Speaker</Form.Label>
                  <Form.Control id="speaker" type="text" value={this.state.addModal.speaker.toString()} 
                  onChange={(e) =>this.setAddModalStringFildState("speaker",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="dateAndTime">Date And Time as format yyyy-mm-ddThh:mm:ss</Form.Label>
                  <Form.Control id="dateAndTime" type="text" value={this.state.addModal.dateAndTime.toString()}
                  onChange={(e) =>this.setAddModalStringFildState("dateAndTime",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="durationTime">Duration Time</Form.Label>
                  <Form.Control id="durationTime" type="text" value={this.state.addModal.durationTime.toString()}
                  onChange={(e) =>this.setAddModalStringFildState("durationTime",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="address">Address</Form.Label>
                  <Form.Control id="address" type="text" value={this.state.addModal.address.toString()}
                  onChange={(e) =>this.setAddModalStringFildState("address",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="sal">Sal</Form.Label>
                  <Form.Control id="sal" type="text" value={this.state.addModal.sal.toString()}
                  onChange={(e) =>this.setAddModalStringFildState("sal",e.target.value)}>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label htmlFor="numberOfSeats">Number Of Seats</Form.Label>
                  <Form.Control id="numberOfSeats" type="number" value={this.state.addModal.numberOfSeats.toString()}
                  onChange={(e) =>this.setAddModalNumberFildState("numberOfSeats",e.target.value)}>
                  </Form.Control>
              </Form.Group>
              
                <Button className="btn  btn-primary btn-block"
                  onClick={()=>this.doAddSeminar()}>
                  ADD Seminar
                </Button>
          </Modal.Body>
      </Modal>
	  </div>
    )
   } 
    showAddModal(){
    this.setAddModalStringFildState('name','');
    this.setAddModalStringFildState('topic','');
    this.setAddModalStringFildState('speaker','');
    this.setAddModalStringFildState('dateAndTime','');
    this.setAddModalStringFildState('durationTime','');
    this.setAddModalStringFildState('address','');
    this.setAddModalStringFildState('sal','');
    this.setAddModalNumberFildState("numberOfSeats",0);
    this.setAddModalVisibleState(true);
   }
   setAddModalVisibleState(newState){
    this.setState(Object.assign(this.state,
        Object.assign(this.state.addModal, {
            visible: newState,
        })
    ));
}
    setAddModalStringFildState(fildName, newValue){
    this.setState(Object.assign(this.state,
        Object.assign(this.state.addModal, {
            [fildName] :  newValue 
        })
    ));
}
    setAddModalNumberFildState(fildName, newValue){
    this.setState(Object.assign(this.state,
        Object.assign(this.state.addModal, {
            [fildName] : Number( newValue )
        })
    ));
}
doAddSeminar(){
    if(!window.confirm('Are Formuler Coorect ?????')){
        return;
    }
    var data = {
        name: this.state.addModal.name,
        topic: this.state.addModal.topic,
        speaker: this.state.addModal.speaker,
        dateAndTime: this.state.addModal.dateAndTime,
        durationTime: this.state.addModal.durationTime,
        address:this.state.addModal.address,
        sal:this.state.addModal.sal,
        numberOfSeats:this.state.addModal.numberOfSeats,
       };
       var url ='https://localhost:5001/api/seminars/';
    fetch(url, {
    method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(()=> this.fetchSeminars())
    .catch((error) => {
      console.error('Error:NOT IS WRONG', error);
    });
    this.setAddModalVisibleState(false);
 }
}
