import React, { Component } from 'react';
import './match.css';
import { Row, Col, Affix } from 'antd';
import News from '../../common/news/news';
import MatchList from './../match_list/MatchList';

class Match extends Component {
  render() {
    return (
      <div className="match">
        <Row>
          <Col span={6}>
            <Affix>
              <News />
            </Affix>
          </Col>

          <Col span={18} style={{ padding: '0px 5% 0px' }}>
            <MatchList url={this.props.match.url} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Match;
