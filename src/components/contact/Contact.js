import React, { Component } from 'react';
import './contact.css';
import { Row, Col } from 'antd';
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1 className="contact-title"> TWO FOOTBALL </h1>
        <Row style={{ textAlign: 'center', display: 'flex' }}>
          <Col span={8} style={{ magin: 'auto', display: 'flex' }}>
            <img
              src="images/minivan_v2.png"
              alt="logo-hl"
              width="80%"
              style={{ magin: 'auto' }}
            />
          </Col>

          <Col span={16}>
            <div style={{ color: 'rgba(74, 67, 124, 0.68)' }}>
              <br />
              <ul className="list-unstyled">
                <li>
                  <h3 style={{ fontWeight: 'bold' }}> GROUP 03 - ICT K60</h3>
                </li>
                <li>
                  <i className="fa fa-home" aria-hidden="true" />
                  P406 - D9 - Hanoi University Of Science And Technology
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true" />
                  <b>0225 3920920 - Fax: 02253 757125</b>
                </li>
                <li>
                  <i className="far fa-envelope" aria-hidden="true" />
                  ictk60@gmail.com
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
        <Row className="row" style={{ textAlign: 'center', color: '#fff' }}>
          <Col span={6}>
            <img
              width="150px"
              height="150px"
              src="https://scontent.fhan2-1.fna.fbcdn.net/v/t31.0-8/14712875_355912628082290_1631855056545361260_o.jpg?_nc_cat=106&_nc_oc=AQnqczvY_Fd2Z7-vdqa_rB3PC6W4YvUMIWF_ELd2Dd6lbUjZ3gIqYpHilQN2ghiRXMW4Pp6d1mKBiZGwXlVKcb-O&_nc_ht=scontent.fhan2-1.fna&oh=614c36518485b8bc9e0bd9874680cbbd&oe=5D9A89B0"
              className="rounded-circle"
              alt="Cinque Terre"
            />
            <p style={{ textAlign: 'center', color: '#fff' }}>Ha Quy Dung</p>
          </Col>

          <Col span={6}>
            <img
              width="200px"
              height="200px"
              src="https://scontent.fhan2-1.fna.fbcdn.net/v/t31.0-8/16300149_1171393902980002_8260090941206613423_o.jpg?_nc_cat=103&_nc_ht=scontent.fhan2-1.fna&oh=03d251375e5469e0e5277ef3f58db05b&oe=5CA249E5"
              className="rounded-circle"
              alt="Cinque Terre"
            />
            <p style={{ textAlign: 'center', color: '#fff' }}>Le Van Vuong</p>
          </Col>

          <Col span={6}>
            <img
              width="200px"
              height="200px"
              src="http://anhsv.hust.edu.vn/Student/20150853.jpg"
              className="rounded-circle"
              alt="Cinque Terre"
            />
            <p style={{ textAlign: 'center', color: '#fff' }}>Antoine Cromwel</p>
          </Col>

          <Col span={6}>
            <img
              width="200px"
              height="200px"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/44100782_2082697471760808_3090816667026980864_n.jpg?_nc_cat=105&_nc_ht=scontent.fhan2-4.fna&oh=b0d58dc9e3d4e9315a8e678183a7a1b9&oe=5CAB6F0D"
              className="rounded-circle"
              alt="Cinque Terre"
            />
            <p style={{ textAlign: 'center', color: '#fff' }}>Antoine Cromwel</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
