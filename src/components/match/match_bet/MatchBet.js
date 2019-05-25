import React, { Component } from 'react';
import { Button, Row, Col, Affix } from 'antd';
import { Link } from 'react-router-dom';
import MatchBoard from './MatchBoard';
import './match-bet.css';
import BetBoard from './BetBoard';
import ListComment from '../comment/ListComment';
import UserComment from '../comment/UserComment';

class MatchBet extends Component {
  intervalID = 0;

  render() {
    return (
      <div className="match-bet">
        <Button>
          <Link to="/match"> BACK </Link>
        </Button>
        <Row>
          <Col span={18}>
            <MatchBoard match_id={this.props.location.state.match.match_id} />
            <BetBoard
              match_id={this.props.location.state.match.match_id}
              home={this.props.location.state.match.match_hometeam_name}
              away={this.props.location.state.match.match_awayteam_name}
              match_status={this.props.location.state.match.match_status}
            />
            <UserComment match_id={this.props.location.state.match.match_id} />
            <ListComment match_id={this.props.location.state.match.match_id} />
          </Col>

          <Col span={6}>
            <Affix>
              <img
                src={require('../../../assets/images/how_to_play.png')}
                style={{ width: '100%', padding: '0vh 5vh 5vh 5vh' }}
                alt=""
              />
            </Affix>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MatchBet;
