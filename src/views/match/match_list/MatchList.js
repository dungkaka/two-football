import React, {Component} from 'react';
import {apifootballKey} from "../../../config/API-key";

class MatchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            listMatch: [],
        }
    }


    componentDidMount = () => {

        //leangue_id = 63 | 128
        const url = `https://apifootball.com/api/?action=get_events&from=2019-04-17&to=2019-04-20&APIkey=${apifootballKey}`;
        fetch(url)
            .then(response => {
                const data = response.json();
                console.log(data);
                return data;
            })
            .then(data => {
                console.log(data);
                this.setState({
                    listMatch: data,
                    isLoading: true,
                })
            });
        console.log(this.state.listMatch);

    }

    render() {
        return (
            <div>
                <pre style={{background: "white"}}>
                    {JSON.stringify(this.state.listMatch, null, '\t')}
                </pre>
            </div>
        );
    }
}

export default MatchList;