import React, { Component } from 'react';
import "./match-bet.css";

class BetCard extends Component {
    render() {
        return (
            <div className="bet-card">
                <div className="bet-card-title">
                    FIRST HAFT
                </div>
                <div className="bet-card-content">
                    {this.props.home} - {this.props.away}
                </div>
                <div className="bet-card-action">
                    BET
                </div>
            </div>
        );
    }
}

export default BetCard;