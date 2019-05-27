import React, { Component } from 'react';
import './match.css';
import { Row, Col } from 'antd';
import News from '../../common/news/news';
import MatchList from './../match_list/MatchList';

class Match extends Component {
  render() {
    return (
      <div className="match">
        <Row>
          <Col lg={6} md={8} sm={10}>
            <News />
          </Col>

          <Col lg={18} md={16} sm={14} style={{ padding: '0px 5% 0px' }}>
            <MatchList url={this.props.match.url} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Match;
