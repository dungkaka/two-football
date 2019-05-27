import React, { Component } from 'react';
import logo from '../../../assets/images/logo.png';
import './footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <footer className="footer-distributed">
                <div className="footer-left">

                    <div className="logo"><img src={logo}/></div>
                    {/* <h3>Two<span>Foorball</span></h3> */}

                        <p className="footer-links">
                             <a href="#">Home </a>
                                 ·
    
                            <a href="#"> About </a>
                                 ·
                            <a href="#"> Faq </a>
                                 ·
                             <a href="#"> Contact</a>
                            </p>

                        <p className="footer-company-name">TwoFootball &copy; 2019</p>
                        </div>

                            <div className="footer-right">

                                <div className="footer-icons">

                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-github"></i></a>

                                    </div>



                    </div>
                    </footer>
            </div>
        );
    }
}

export default Footer;