import React, { Component } from 'react';
import './match.css';
import {Row, Col, Affix} from 'antd';
import News from '../../global_component/news/news';
import MatchList from "./match_list/MatchList";

class Match extends Component {
    render() {
        return (
            <div className="match">
                <Row>
                    <Col span={6}>
                        <Affix>
                            <News></News>
                        </Affix>
                    </Col>

                    <Col span={18}>
                        <MatchList/>
                    </Col>
                </Row>


            </div>
        );
    }
}

export default Match;