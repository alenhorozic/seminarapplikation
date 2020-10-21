import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap';

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
                         <Form.Control  size="sm" type="text" text={this.state.text} placeholder="Search" onChange={(e) => this.setState({text: e.target.value})} />
                     </Form.Group>

                        <Button  size="sm" variant="primary" onClick={() => this.props.handleSearchClick(this.state.text)}>
                           Search
                        </Button>
                </Form>
            </div>
        );
    }
}
