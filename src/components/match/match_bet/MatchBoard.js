import React, { Component } from 'react';
import { URL } from './../../../config/end-points-url';
import { Row, Col, Button, Icon } from 'antd';

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

    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          match: data[0],
          isLoading: false,
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
            isLoading: false,
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
        <Row style={{ display: 'flex' }}>
          <Col span={11} style={{ textAlign: 'right' }}>
            <div>
              {match.match_hometeam_name}
              <Button type="danger" className="button-score-left">
                {match.match_hometeam_score}
              </Button>
            </div>
          </Col>

          <Col span={2} style={{ textAlign: 'center', margin: 'auto' }}>
            {this.state.isLoading && <Icon type="loading" />}
            {!this.state.isLoading && '-'}
          </Col>

          <Col span={11} style={{ textAlign: 'left' }}>
            <div>
              <Button type="danger" className="button-score-right">
                {match.match_awayteam_score}
              </Button>
              {match.match_awayteam_name}
            </div>
          </Col>
        </Row>

        <Row style={{ textAlign: 'center', marginTop: '5px' }}>
          <p>Match Time: {match.match_time}</p>
          <p>Match Status: {match.match_status}</p>
        </Row>
      </div>
    );
  }
}

export default MatchBoard;
