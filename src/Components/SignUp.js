import React, { Component } from 'react';
import { FormGroup, Form, Label, Input, Button } from 'reactstrap';

class SignUp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Form className="m-1">
                <FormGroup>
                <Label>Username</Label>
                <Input className="inputbox" type="text"></Input>
                <Label>password</Label>
                <Input className="passwordbox"></Input>
                <Button onClick= {this.props.addUser} color="primary" className="my-1">Add User</Button>
                </FormGroup>
            </Form>
        )
    }
}

export default SignUp