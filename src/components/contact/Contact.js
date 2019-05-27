import React, { Component } from 'react';
import './contact.css';
import { Row, Col } from 'antd';
const bgBlur = require('../../assets/images/logo.png');
const dung = require('../../assets/images/dung.jpg');
const vuong = require('../../assets/images/vuong.jpg');
const thanh = require('../../assets/images/thanh.jpg');
const dat = require('../../assets/images/dat.jpg');

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1 className="contact-title"> TWO FOOTBALL </h1>
        <Row style={{ textAlign: 'center', display: 'flex' }}>
          <Col span={10} style={{ magin: 'auto', display: 'flex' }}>
            <img
              src={bgBlur}
              alt="logo-hl"
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
          </Col>

          <Col span={14}>
            <div style={{ color: 'rgba(74, 67, 124, 0.68)' }}>
              <br />
              <ul className="list-unstyled">
                <li>
                  <h3 style={{ fontWeight: 'bold' }}> GROUP 02 - ICT K60</h3>
                </li>
                <li>
                  <i className="fa fa-home" aria-hidden="true" />
                  P406 - D9 - Hanoi University Of Science And Technology
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true" />
                  <b>Phone Number: 123456789 - Fax: 987654321</b>
                </li>
                <li>
                  <i className="far fa-envelope" aria-hidden="true" />
                  two-football@abc.com
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />

        <h1 className="contact-title"> MEMBER </h1>
        <Row style={{ textAlign: 'center', color: '#fff', margin: '40px' }}>
          <Col span={6}>
            <img
              width="150px"
              height="150px"
              src={vuong}
              className="rounded-circle"
              alt="Cinque Terre"
            />
            <p style={{ textAlign: 'center', color: '#fff' }}>Lê Văn Vương</p>
          </Col>

          <Col span={6}>
            <img
              width="150px"
              height="150px"
              src={dung}
              className="rounded-circle"
              alt="Cinque Terre"
            />
            <p style={{ textAlign: 'center', color: '#fff' }}>Hà Quý Dũng</p>
          </Col>

          <Col span={6}>
            <img
              width="150px"
              height="150px"
              src={thanh}
              className="rounded-circle"
              alt="Cinque Terre"
            />
            <p style={{ textAlign: 'center', color: '#fff' }}>Bùi Công Thành</p>
          </Col>

          <Col span={6}>
            <img
              width="150px"
              height="150px"
              src={dat}
              className="rounded-circle"
              alt="Cinque Terre"
            />
            <p style={{ textAlign: 'center', color: '#fff' }}>Nguyễn Tiến Đạt</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
