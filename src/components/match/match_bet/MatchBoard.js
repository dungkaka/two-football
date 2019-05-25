import React, { Component } from 'react';
import { URL } from './../../../config/end-points-url';

class MatchBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: {
        match_id: '',
        match_hometeam_name: '',
        match_awayteam_name: '',
        match_hometeam_score: '',
        match_awayteam_score: '',
        match_status: '',
        match_time: '',
        match_live: '',
      },
      isLoading: false,
    };
  }

  number = 0;

  async componentDidMount() {
    const url = URL.GET_MATCH(this.props.match_id);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          match: data[0],
          isLoading: true,
        });
      });

    this.intervalID = setInterval(() => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            match: data[0],
            isLoading: true,
          });

          if (this.state.match.match_live === '0') {
            clearInterval(this.intervalID);
          }
        });
    }, 15000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { match } = this.state;
    return (
      <div className="match-board">
        {JSON.stringify(
          {
            Id: match.match_id,
            Home: match.match_hometeam_name,
            Away: match.match_awayteam_name,
            Match_Time: match.match_time,
            Result: match.match_hometeam_score + match.match_awayteam_score,
            Live: match.match_live,
          },
          null,
          '\t'
        )}
      </div>
    );
  }
}

export default MatchBoard;
