import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    const { user } = this.props.user;
    return <div>{JSON.stringify(user, null, '\t')}</div>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
