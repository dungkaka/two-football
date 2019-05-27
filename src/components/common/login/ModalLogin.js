import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import { login } from './../../../actions/login';
import { Row, Col, Icon } from 'antd';

const LOGIN_URL = 'https://passenger-transport.herokuapp.com/login';
const METHOD = 'POST';
const EXCEPTED_RESPONSE = {
  access_token: 'access_token',
  user: 'user',
  redirect_url: '',
};

class ModalLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidMess: false,
    };

    this.username_input = React.createRef();
    this.password_input = React.createRef();
    // this.submit = this.submit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const error = nextProps.error;
    if (error) {
      return { ...prevState, invalidMess: error };
    }
  }

  render() {
    return (
      <div>
        <Row style={{ display: 'flex' }}>
          <Col xs={0} sm={0} md={12} lg={12} className="left-side">
            <div className="content">
              <h3 style={{ color: 'white' }}>WELCOME TO WEBSITE</h3>
              <div className="outs_more-buttn">
                <a href="/home" style={{ color: 'white' }}>
                  GROUP 02 - ICT K60
                </a>
              </div>
            </div>
          </Col>

          <Col sx={24} sm={24} md={12} lg={12}>
            <div className="wrap-login100">
              <form className="login100-form validate-form" ref="submitForm">
                {/* Title Login */}
                <span className="login100-form-title">LOGIN</span>

                {this.state.invalidMess && (
                  <div className="invalidMess">Invalid username or password !</div>
                )}

                {/* Form Login */}
                <div
                  className="wrap-input100 validate-input m-b-23"
                  data-validate="Username is required"
                >
                  <span className="label-input100">Username</span>
                  <input
                    className="input100"
                    ref={this.username_input}
                    type="text"
                    name="username"
                    placeholder="Type your username"
                    required
                  />
                  <span className="focus-input100" data-symbol="" />
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <span className="label-input100">Password</span>
                  <input
                    className="input100"
                    ref={this.password_input}
                    type="password"
                    name="pass"
                    placeholder="Type your password"
                    required
                  />
                  <span className="focus-input100" data-symbol="" />
                </div>
                {/* Forgot Password */}
                <div className="text-right">
                  <a href="#">Forgot password? </a>
                </div>
                {/* Button Login */}
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button
                      className="login100-form-btn"
                      onClick={(event) => {
                        if (this.refs.submitForm.reportValidity()) {
                          event.preventDefault();
                          this.props.handleOk({
                            username: this.username_input.current.value,
                            password: this.password_input.current.value,
                          });
                          // do something here
                        }
                      }}
                    >
                      {this.props.loading && <Icon type="loading" />}
                      {` Login `}
                    </button>
                  </div>
                </div>
                <div style={{ marginBottom: ' 30px' }} />
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalLogin);
