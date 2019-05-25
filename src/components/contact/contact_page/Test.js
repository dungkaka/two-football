import React, { Component } from 'react';

class Test extends Component {


    componentWillUpdate(nextProps, nextState) {
        console.log("Test", nextProps, nextState);
    }

    render() {
        console.log("Test change");
        return (
            <div>
                
            </div>
        );
    }
}

console.log("Test change");
export default Test;