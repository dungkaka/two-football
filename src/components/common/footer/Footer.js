import React, { Component } from 'react';
import logo from '../../../assets/images/logo.png';
import './footer.css';
import { Row, Col } from 'antd';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Row className="footer-distributed">
          <Col span={12} className="footer-left">
            <div className="logo">
              <img src={logo} />
            </div>
            {/* <h3>Two<span>Foorball</span></h3> */}

            <p className="footer-links">
              <a href="#">Home </a>·<a href="#"> About </a>·<a href="#"> Faq </a>·
              <a href="#"> Contact</a>
            </p>

            <p className="footer-company-name">TwoFootball &copy; 2019</p>
          </Col>

          <Col span={12} className="footer-right">
            <div className="footer-icons">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
              <a href="#">
                <i className="fa fa-github" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
