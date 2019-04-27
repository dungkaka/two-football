import React, { Component } from 'react';
import { apifootballKey } from './../../../config/API-key';

class MatchBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            match: {},
            isLoading: false
        }
    }

    number = 0;

    async componentDidMount() {
        const url = `https://apifootball.com/api/?action=get_events&match_id=${this.props.match_id}&APIkey=${apifootballKey}`;
        
        fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.setState({
                        match: data[0],
                        isLoading: true,
                    });
                });
        
        this.intervalID = setInterval(() => {
            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.setState({
                        match: data[0],
                        isLoading: true,
                    });
                    console.log("Number", this.number++);
                    console.log("MATCH_LIVE", this.state.match.match_live);
                    if (this.state.match.match_live === "0") {
                        clearInterval(this.intervalID);
                    }
                });
        }, 15000);

    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <div className="match-board" >
                {JSON.stringify(this.state.match, null, "\t")}
            </div>
        );
    }
}

export default MatchBoard;