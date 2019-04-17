import React, { Component } from 'react';
import {Button} from 'antd';
import Example from "./Example";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            change: " true ",
        }
    }

    componentWillMount = () => {
        console.log("Contact Component Will Mount");
    }

    componentDidMount = () => {
        console.log("Contact Component Did Mount");
        this.setState({
            change: " DidMount "
        })
    }

    componentWillReceiveProps = (nextProps) => {
        console.log("Contact Component Will Receive Props" + nextProps.change);
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log("Contact Component Shoud Update" + nextProps.change + nextState.change);
        return true;
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("Contact Component Did Update" + prevProps.change + prevState.change);
    }

    componentWillUpdate = (nextProps, nextState) => {
        console.log("Contact Component Will Update" + nextProps.change + nextState.change)
    }

    render() {
        console.log("Contact Render here");
        return (
            <div>
                <h1> THIS IS CONTACT PAGE </h1>
                <Example change = {this.state.change }> </Example>
                <Button onClick={() => this.setState({change: " false "})}> BUTTON HERE </Button>
            </div>
        );
    }
}

export default Contact;