import React, { Component } from 'react';

class More extends Component {

    componentWillUpdate(nextProps, nextState) {
        console.log("More", nextProps, nextState);
    }


    render() {
        console.log("More change")
        return (
            <div>
                
            </div>
        );
    }
}

console.log("More change")
export default More;