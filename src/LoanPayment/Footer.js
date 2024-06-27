import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import footer from '../footer.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../logo.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-4">
            <Container>
                <Row>
                    <Col md={3}>
                        <div style={{ fontSize: "11px", color: 'gray' }}>
                            <p>
                                <img
                                    src={logo}
                                    height="120px"
                                    width="250px"
                                    className="d-inline-block align-top"
                                    alt="SCB React-Training-Week-3 logo"
                                />
                            </p>
                            <p>ABOUT US</p>
                            <p> BANK WITH US</p>
                            <p> ATMS AND BRANCHES</p>
                            <p> GET HELP</p>
                            <p> FAQS</p>
                            {/* <p> FORMS AND DOWNLOADS</p>
                            <p> WEBSITE PRIVACY STATEMENT</p>
                            <p> LATEST FINANCIAL RESULTS</p>
                            <p> IMPORTANT INFORMATION</p> */}
                        </div>
                    </Col>
                    <Col md={3}>
                        <div style={{ fontSize: "11px", color: 'gray' }}>
                            <p>ABOUT US</p>
                            <p> BANK WITH US</p>
                            <p> ATMS AND BRANCHES</p>
                            <p> GET HELP</p>
                            <p> FAQS</p>
                            <p> FORMS AND DOWNLOADS</p>
                            <p> WEBSITE PRIVACY STATEMENT</p>
                            <p> LATEST FINANCIAL RESULTS</p>
                            <p> IMPORTANT INFORMATION</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div style={{ fontSize: "11px", color: 'gray' }}>

                            <p>LATEST MARKET INSIGHTS</p>
                            <p>INVESTOR RELATIONS</p>
                            <p>GLOBAL RESEARCH</p>
                            <p>NEWS AND MEDIA</p>
                            <p>AWARDS AND ACHIEVEMENT</p>
                            <p>CAREERS</p>
                            <p>GROUP WEBSITE</p>
                            <p>WORLDWIDE LOCATIONS</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div style={{ fontSize: "15px", color: 'gray' }}>
                            <p> <img
                                src={footer}
                                height="80px"
                                width="100px"
                                className="d-inline-block align-top"
                                alt="SCB React-Training-Week-3 logo"
                            /></p>
                            <p> STANDARD </p>
                            <p> CHARTERED BANK IS </p>
                            <p> REGISTERED WITH </p>
                            <p> DICGC </p>
                            <p> HTTPS://WWW.DICGC.ORG.IN</p>

                        </div>
                    </Col>
                </Row><br />
                <Row>
                    <Col md={6}>
                        <div style={{ fontSize: "20px", color: 'gray' }}>
                            <p>© Standard Chartered Bank 2022  SITE MAP</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{ fontSize: "20px", color: 'gray' }}>
                            <p><FaLinkedin /> &nbsp;&nbsp;&nbsp;<FaInstagram />&nbsp;&nbsp;&nbsp; <FaFacebook />&nbsp;&nbsp;&nbsp; <FaTwitter />&nbsp;&nbsp;&nbsp; <FaYoutube />





                            </p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
