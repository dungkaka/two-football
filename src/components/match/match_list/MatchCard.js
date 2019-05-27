import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'antd';
import './match-list.css';

class MatchCard extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <Card
          className="match-card hover"
          hoverable
          cover={
            <div className="title-card">
              <Row>
                <Col span={10} style={{ textAlign: 'right' }}>
                  {item.match_awayteam_name}
                </Col>
                <Col span={4} style={{ textAlign: 'center' }}>
                  {' '}
                  -{' '}
                </Col>
                <Col span={10} style={{ textAlign: 'left' }}>
                  {item.match_hometeam_name}
                </Col>
              </Row>

              <Row style={{ display: 'flex', marginTop: '10px' }}>
                <Col span={10} style={{ textAlign: 'right', fontSize: '25px' }}>
                  {item.match_hometeam_score}
                </Col>
                <Col span={4} style={{ textAlign: 'center', margin: 'auto' }}>
                  -
                </Col>
                <Col span={10} style={{ textAlign: 'left', fontSize: '25px' }}>
                  {item.match_awayteam_score}
                </Col>
              </Row>
            </div>
          }
          bodyStyle={{
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '0px 0px 15px 15px',
            padding: '15px',
          }}
        >
          <div class="body-betcard">
            <Row>
              <Col
                span={16}
                style={{
                  paddingLeft: '10px',
                }}
              >
                <p> Time: {item.match_time}</p>
                <p> Date: {item.match_date}</p>
              </Col>
              <Col span={8}>
                <Button type="danger" className="button-live">
                  Live
                </Button>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    );
  }
}

export default MatchCard;
