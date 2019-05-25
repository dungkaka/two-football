import React, { Component } from 'react';
import './home.css';
import { Row, Col, Affix } from 'antd';
import LiveTable from './../live_table/LiveTable';
import News from '../../common/news/news';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Row>
                    <Col span={6}>
                        <Affix>
                            <News></News>
                        </Affix>
                    </Col>

                    <Col span={18}>
                        <LiveTable></LiveTable>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Home;