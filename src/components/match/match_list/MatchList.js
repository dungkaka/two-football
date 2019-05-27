import React, { Component } from 'react';
import { apifootballKey } from '../../../config/API-key';
import { message, List, notification, Icon } from 'antd';
import { Link } from 'react-router-dom';
import MatchCard from './MatchCard';
import User from './../../profile/User';
import { connect } from 'react-redux';
import { URL } from './../../../config/end-points-url';

notification.config({
  placement: 'bottomLeft',
  duration: 5,
});

class MatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      listMatch: [],
    };
  }

  async componentDidMount() {
    //leangue_id = 63 | 128
    const url = URL.GET_LIST_MATCH();
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          listMatch: data,
          isLoading: true,
        });
      });
  }

  goToBedRoom = (item) => {
    if (!this.props.user.user) {
      return (
        <Link
          onClick={() => {
            notification.open({
              message: 'Login before go into Bet room',
              icon: (
                <Icon type="warning" style={{ color: '#108ee9', fontSize: '20px' }} />
              ),
            });
          }}
        >
          <List.Item>
            <MatchCard item={item} />
          </List.Item>
        </Link>
      );
    } else {
      return (
        <Link
          to={{
            pathname: `/match/${item.match_id}`,
            state: {
              match: item,
            },
          }}
        >
          <List.Item>
            <MatchCard item={item} />
          </List.Item>
        </Link>
      );
    }
  };

  render() {
    console.log(this.state.listMatch);
    return (
      <div>
        <List
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 6,
          }}
          grid={{
            gutter: 32,
            md: 2,
            lg: 2,
          }}
          dataSource={this.state.listMatch}
          renderItem={(item) => this.goToBedRoom(item)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchList);
