import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export default class SearchField extends Component {
    constructor(){
        super();
            this.state = {text: "" }; 
    }
    render() {
        return (
            <div>
                <Form>
                     <Form.Group controlId="phonrMumber">
                         <Form.Control  size="sm" type="text" text={this.state.text} placeholder="Search" onChange={(e) => {this.setState({text: e.target.value});
                        this.props.handleSearchChange(e.target.value)}} />
                     </Form.Group>
                </Form>
            </div>
        );
    }
}
