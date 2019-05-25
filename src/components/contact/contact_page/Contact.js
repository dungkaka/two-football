import React, { Component } from 'react';
import { Button, Input, Row, Col } from 'antd';
import More from './More';
import Test from './Test';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test',
      more: 'more',
    };
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Parent', nextProps, nextState);
  }

  render() {
    console.log('Repeat');
    return (
      <div>
        <More />
        <Button
          onClick={() => {
            this.setState({
              test: 'test_1',
            });
          }}
        />

        <Test test={this.state.test} />
      </div>
    );
  }
}

export default Contact;
