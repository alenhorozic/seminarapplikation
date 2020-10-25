import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  SearchField from '../searchField/searchField';
import { Table , Card } from 'react-bootstrap';

export default class BookingsAdministrator extends Component {
   constructor(props) {
      super(props);
      this.state = {bookings: [], filtredBookings: []};
   }
   
   filter(filterText){
      var outBookings = [];
      
      this.state.bookings.forEach(item => {
         if(this.compereSearchText(item, filterText)){
             outBookings.push(item);
         }
      });
     this.setState({filtredBookings:outBookings});
   }
   compereSearchText(item, filterText){
      return(item.seminarId.toString().search(filterText.toString()) >= 0 
      );
   }
   componentDidMount() {
      this.fetchBookings();
   }
   fetchBookings() {
      fetch("https://localhost:5001/api/booking/")
      .then((response)=>response.json())
      .then((json)=>this.setState({bookings: json, filtredBookings: json}))
   }
   handleClickEvent(id) {
      console.log(id);
   }
   render(){
    return (
        <div  className="page" id="pocetna">
	    <div className="column" id="column-grid-adm">
		     <div className="dark-box" id="grid-a">
             <h1>Bookings {this.state.filtredBookings.length}</h1> 
             <SearchField handleSearchChange={(text) => this.filter(text)} /> 

             <div class="table-wrapper-scroll-y my-custom-scrollbar" responsive hover size ="sm" bordered>
                
                <Card class="table-wrapper-scroll-y my-custom-scrollbar">
                <Card.Body>
                    
                    <Table class="table table-bordered table-striped mb-0" responsive hover size ="sm" bordered>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>CreatedAt</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Seminar Id</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.filtredBookings.map((item) => (
                    <tr>
                    <td><Link className="red-text" to={`/infoSeminar/${item.id}`}>{item.id}</Link></td>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.createdAt.substring(0,10)}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.seminarId}</td>
                    </tr>
                    ))}
                        </tbody>
                    </Table> 
                    
                </Card.Body>
            </Card>
            </div>    
			 </div>
		</div>
	  </div>
    )
   } 
}

