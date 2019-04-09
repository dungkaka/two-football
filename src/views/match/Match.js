import React, { Component } from 'react';

class Match extends Component {
    render() {
        return (
            <div>
                <h1> THIS IS MATCH PAGE </h1>
                <iframe
                    width="80%"
                    height="100vh"
                    style={{ overflow: 'hidden', height: '80vh', display: 'block', border: '1px solid white', borderRadius: '5px', }}
                    src="https://apifootball.com/widget/display/index.php?display=nextMatch&id=11775">
                </iframe>


            </div>
        );
    }
}

export default Match;