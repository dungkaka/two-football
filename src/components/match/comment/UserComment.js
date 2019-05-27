import React, { Component } from 'react';
import { Input, Button, Row, Col, Icon } from 'antd';
import request from '../../../utils/axios';
import { URL } from './../../../config/end-points-url';

class UserComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      isLoading: false,
    };
  }

  onCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  onUpdateComment = async () => {
    this.setState({
      isLoading: true,
    });
    const response = await request.server.post(
      URL.COMMENT_ON_MATCH(this.props.match_id),
      {
        comment: this.state.comment,
      }
    );
    this.setState({
      comment: '',
      isLoading: false,
    });
  };

  render() {
    return (
      <Row className="comment-match">
        <Col span={3} style={{ margin: 'auto' }}>
          <img
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt=""
            className="image-user-comment"
          />
        </Col>
        <Col span={17} style={{ margin: 'auto', padding: '0px 5px 0px 0px' }}>
          <Input
            onChange={(event) => this.onCommentChange(event)}
            placeholder="comment here"
            value={this.state.comment}
            className="input-comment"
          />
        </Col>
        <Col span={4} style={{ margin: 'auto', padding: '0px 5px' }}>
          <Button
            type="primary"
            style={{ borderRadius: '15px' }}
            onClick={this.state.comment && this.onUpdateComment}
          >
            {this.state.isLoading && <Icon type="loading" />}Comment
          </Button>
        </Col>
      </Row>
    );
  }
}

export default UserComment;
