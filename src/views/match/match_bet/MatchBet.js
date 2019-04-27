import React, { Component } from 'react';
import { Button, Row, Col, Affix } from 'antd';
import { Link } from 'react-router-dom';
import News from '../../../global_component/news/news';
import MatchBoard from './MatchBoard';
import './match-bet.css';
import BetCard from './BetCard';

class MatchBet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            match: {},
            isLoading: false
        }
    }

    intervalID = 0;

    render() {
        return (
            <div className="match-bet">
                <Button>
                    <Link to="/match"> BACK </Link>
                </Button>
                <Row>
                    <Col span={18}>
                        <MatchBoard match_id={this.props.location.state.match.match_id}></MatchBoard>
                        <BetCard 
                            home={this.props.location.state.match.match_hometeam_name}
                            away={this.props.location.state.match.match_awayteam_name}
                            >
                        </BetCard>
                    </Col>

                    <Col span={6}>
                        <Affix>
                            <img src={require('../../../assets/images/how_to_play.png')} style={{ width: "100%", padding: "0vh 5vh 5vh 5vh" }}></img>
                        </Affix>

                    </Col>
                </Row>


            </div>


        );
    }
}

export default MatchBet;