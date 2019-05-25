import React, { Component } from 'react';
import { Input, Button } from 'antd';
import request from '../../../utils/axios';
import { URL } from './../../../config/end-points-url';

class UserComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  onCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  onUpdateComment = async () => {
    const response = await request.server.post(
      URL.COMMENT_ON_MATCH(this.props.match_id),
      {
        comment: this.state.comment,
      }
    );
  };

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <img
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          width="40px"
          height="40px"
          alt=""
        />
        <Input
          onChange={(event) => this.onCommentChange(event)}
          placeholder="comment here"
        />
        <Button onClick={this.onUpdateComment}>Comment</Button>
      </div>
    );
  }
}

export default UserComment;
