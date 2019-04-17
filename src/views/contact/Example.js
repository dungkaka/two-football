import React, {Component} from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            change: " Nothing ",
            number: " 123 "
        }
    }


    componentWillMount = () => {
        console.log("Example Component Will Mount");
    }

    componentDidMount = () => {
        console.log("Example Component Did Mount");
    }

    componentWillReceiveProps = (nextProps) => {
        console.log("Example Component Will Receive Props" + nextProps.change);
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log("Example Component Shoud Update" + nextProps.change + nextState.change);
        return true;
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("Example Component Did Update" + prevProps.change + prevState.change);
    }

    componentWillUpdate = (nextProps, nextState) => {
        console.log("Example Component Will Update" + nextProps.change + nextState.change)
    }

    render() {
        console.log("Example Render Here");
        return (
            <div>
                <h> {this.props.change.toString()} </h>
            </div>
        );
    }
}

export default Example;