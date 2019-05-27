import React, { Component } from 'react';
import request from './../../../utils/axios';
import { URL } from './../../../config/end-points-url';
import { Icon, Table } from 'antd';

class Millionaires extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      millionaires: [],
    };
  }

  componentDidMount = async () => {
    this.setState({
      isLoading: true,
    });
    const response = await request.server.get(URL.GET_MILLIONAIRES_RAKING());
    console.log(response.data);
    this.setState({
      isLoading: false,
      millionaires: response.data.users,
    });
  };

  render() {
    const columns = [
      {
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank',
        render: (text, record) => {
          return this.state.millionaires.indexOf(record) + 1;
        },
      },
      {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Balance',
        dataIndex: 'balance',
        key: 'balance',
      },
    ];
    return (
      <div style={{ color: 'white', textAlign: 'center' }}>
        {this.state.isLoading && (
          <Icon
            type="loading"
            style={{
              fontSize: '50px',
              color: 'white',
              marginTop: '100px',
            }}
          />
        )}
        {!this.state.isLoading && (
          <Table
            pagination={false}
            dataSource={this.state.millionaires}
            columns={columns}
            className="table-millionaires"
          />
        )}
      </div>
    );
  }
}

export default Millionaires;
