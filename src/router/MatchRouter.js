import React, { Component } from 'react';

class MatchRouter extends Component {

    render() {
        return (
            <div>
                <Route path={`${this.props.match.url/hello}`}></Route>
            </div>
        );
    }
}

export default MatchRouter;