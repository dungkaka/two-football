import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton, Input } from 'antd';
import './comment.css';
import request from './../../../utils/axios';
import { URL } from './../../../config/end-points-url';
import { commentChannel as channel } from './../../../utils/pusher';

const count = 5;

class ListComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: true,
      loading: false,
      data: [],
      list: [],
      numberComment: 5,
    };
  }

  async componentDidMount() {
    const res = await request.server.get(
      URL.GET_COMMENT_OF_MATCH(this.props.match_id) +
        `?number=${this.state.numberComment}`
    );
    this.setState({
      initLoading: false,
      data: res.data.data,
      list: res.data.data,
    });
    this.subcribeComment();
  }

  onLoadMore = async (number) => {
    this.setState({
      loading: true,
      numberComment: this.state.numberComment + number,
      list: this.state.list.concat(
        [...new Array(count)].map(() => ({ loading: true, user: {} }))
      ),
    });

    const res = await request.server.get(
      URL.GET_COMMENT_OF_MATCH(this.props.match_id) +
        `?number=${this.state.numberComment}`
    );
    const data = res.data.data;
    this.setState(
      {
        data,
        list: data,
        loading: false,
      },
      () => {
        window.dispatchEvent(new Event('resize'));
      }
    );
  };

  subcribeComment = () => {
    channel.bind(
      `comment_${this.props.match_id}`,
      function(data) {
        this.setState({
          list: [data].concat(...this.state.list),
          loading: false,
          numberComment: this.state.numberComment + 1,
        });
      }.bind(this)
    );
  };

  render() {
    console.log(this.state.list);
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            background: 'none',
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button
            style={{
              background: 'none',
              borderRadius: '15px',
            }}
            onClick={() => this.onLoadMore(count)}
          >
            loading more
          </Button>
        </div>
      ) : null;

    return (
      <div>
        <List
          className="list-comment"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item) => (
            <List.Item>
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      style={{ background: 'white' }}
                    />
                  }
                  title={<a href="https://ant.design">{item.user.name}</a>}
                  description={
                    <div>
                      <p>{item.comment}</p>
                      <p style={{ fontSize: '12px', color: 'red' }}>
                        {item.time && item.time.replace('T', ' ')}
                      </p>
                    </div>
                  }
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ListComment;
