import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './About.css';
import WOW from 'wowjs';

class About extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {
        return (
            <div style={{ position: 'relative', bottom: '4rem' }} id='About Me' className='AboutMe'>
            <div id="features" >
                <div class="feature">
                    <div className="main-text wow bounceIn" data-wow-delay=".5s" data-wow-duration="3s">
                        <p>About Me</p>
                    </div>
                </div>
            </div>
            <div className='about'>
                <Row>
                    <Col className='about-details' md={5} xs={12} sm={6}>
                        <div className="About-picture">
                            <div className="About-picture-background wow fadeInLeft"data-wow-delay=".6s" data-wow-duration="3s"></div>
                        </div>
                    </Col>

                    <Col className='About-Content wow fadeInRight' md={7} xs={12} sm={6} data-wow-delay=".6s" data-wow-duration="3s">
                        <div>
                            <h3>
                                About corner
                            </h3>
                            <div>
                                <Row>

                                    <Col md={12}>
                                        <p>
                                            Hello, My Name is Saurabh Ravindra Chavan, Currently Pursuing My Degree in Electronics And Telecom. Engineering with One of the  best college in India which is "Government College of Engineering And Research Avasari, Pune."
                                        </p>
                                        <h5>
                                            Here are a Few Highlights:
                                        </h5>
                                        <ul>
                                            <li>Wordpress Developer</li>
                                            <li>ReactJs Developer</li>
                                            <li>Web Developer and Designer </li>
                                        </ul>
                                        <div className="BUTTON">
                                            <a href="#Contact Me">
                                                <Button className='Button'>Hire me</Button>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        )
    }
}
// const About = () => {
//     return (
//         <>
//             <div style={{ position: 'relative', bottom: '4rem' }} id='About Me' className='AboutMe'>
//                 <div id="features" >
//                     <div class="feature">
//                         <div className="main-text">
//                             <p>About Me</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='about'>
//                     <Row>
//                         <Col className='about-details' md={5} xs={12} sm={6}>
//                             <div className="About-picture">
//                                 <div className="About-picture-background"></div>
//                             </div>
//                         </Col>

//                         <Col className='About-Content' md={7} xs={12} sm={6}>
//                             <div>
//                                 <h3>
//                                     About corner
//                                 </h3>
//                                 <div>
//                                     <Row>

//                                         <Col md={12}>
//                                             <p>
//                                                 Hello, My Name is Saurabh Ravindra Chavan, Currently Pursuing My Degree in Electronics And Telecom. Engineering with One of the  best college in India which is "Government College of Engineering And Research Avasari, Pune."
//                                             </p>
//                                             <h5>
//                                                 Here are a Few Highlights:
//                                             </h5>
//                                             <ul>
//                                                 <li>Wordpress Developer</li>
//                                                 <li>ReactJs Developer</li>
//                                                 <li>Web Developer and Designer </li>
//                                             </ul>
//                                             <div className="BUTTON">
//                                                 <a href="#Contact Me">
//                                                     <Button className='Button'>Hire me</Button>
//                                                 </a>
//                                             </div>
//                                         </Col>
//                                     </Row>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </div>
//             </div>
//         </>
//     )
// }

export default About;