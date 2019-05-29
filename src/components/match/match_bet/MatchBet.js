import React, { Component } from 'react';
import { Button, Row, Col, Icon } from 'antd';
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
        <Row style={{ textAlign: 'center', marginBottom: '2vh' }}>
          <Button className="button-back">
            <Link to="/match">
              <Icon type="arrow-left" /> BACK{' '}
            </Link>
          </Button>
        </Row>

        <Row>
          <Col lg={18} style={{ padding: '0px 15px' }}>
            <MatchBoard match_id={this.props.location.state.match.match_id} />
            <BetBoard
              match_id={this.props.location.state.match.match_id}
              home={this.props.location.state.match.match_hometeam_name}
              away={this.props.location.state.match.match_awayteam_name}
              match_status={this.props.location.state.match.match_status}
              yellow_card={this.props.location.state.match.cards}
            />
            <UserComment match_id={this.props.location.state.match.match_id} />
            <ListComment match_id={this.props.location.state.match.match_id} />
          </Col>

          <Col lg={6}>
            <img
              src={require('../../../assets/images/how_to_play.png')}
              style={{ width: '100%', padding: '0vh 5vh 5vh 5vh' }}
              alt=""
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MatchBet;
