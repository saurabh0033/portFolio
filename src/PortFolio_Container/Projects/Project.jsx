import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import './Project.css';
import WOW from 'wowjs';
import p1 from '../../Assets/Home/p1.jpg';
import p2 from '../../Assets/Home/p2.jpg';
import p3 from '../../Assets/Home/p3.jpg';
import p4 from '../../Assets/Home/p4.jpg';
import p5 from '../../Assets/Home/p5.jpg';
import p6 from '../../Assets/Home/p6.jpg';



class Project extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {
        return (
            <>
                <div id="features1">
                    <div class="feature1">
                        <div class="main-text wow bounceIn" data-wow-delay=".5s" data-wow-duration="3s">
                            <p>Projects</p>
                        </div>
                    </div>
                </div>
                <div className="card-container" id='Projects'>
                    <div className="card-details">
                        <Row>
                            <Col className='card-box' md={4} xs={12} sm={12}>
                                <div className="card-content wow fadeInLeft" data-wow-delay=".6s" data-wow-duration="3s">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={p1} height={"160px"} width={"100%"} className="img" />
                                        <Card.Body>
                                            <Card.Title><h2>BentZip Website</h2></Card.Title>

                                            <a href="https://bentzip.com/" target={"_blank"}>
                                                <div className="BuT">
                                                    <Button className='Button'>View Project</Button>
                                                </div>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col className='card-box' md={4} xs={12} sm={12}>
                                <div className="card-content wow bounceIn" data-wow-delay=".6s" data-wow-duration="3s">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={p2} height={"160px"} width={"100%"} />
                                        <Card.Body>
                                            <Card.Title><h2>Sample College Website</h2></Card.Title>

                                            <a href="https://gcoera-site.netlify.app/" target={"_blank"}>
                                                <div className="BuT">
                                                    <Button className='Button'>View Project</Button>
                                                </div>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col className='card-box' md={4} xs={12} sm={12}>
                                <div className="card-content wow fadeInRight" data-wow-delay=".6s" data-wow-duration="3s">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={p3} height={"160px"} width={"100%"} />
                                        <Card.Body>
                                            <Card.Title><h2>Agency Website</h2></Card.Title>

                                            <a href="https://agency-website-template.herokuapp.com" target={"_blank"}>
                                                <div className="BuT">
                                                    <Button className='Button'>View Project</Button>
                                                </div>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col className='card-box' md={4} xs={12} sm={12}>
                                <div className="card-content wow fadeInLeft" data-wow-delay=".6s" data-wow-duration="3s">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={p4} height={"160px"} width={"100%"} />
                                        <Card.Body>
                                            <Card.Title><h2>Music Player App</h2></Card.Title>

                                            <a href="https://saurabh0033.github.io/Music_App_Clone.github.io/" target={"_blank"}>
                                                <div className="BuT">
                                                    <Button className='Button'>View Project</Button>
                                                </div>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col className='card-box' md={4} xs={12} sm={12}>
                                <div className="card-content wow bounceIn" data-wow-delay=".6s" data-wow-duration="3s">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={p5} height={"160px"} width={"100%"} />
                                        <Card.Body>
                                            <Card.Title><h2>Gym-website</h2></Card.Title>

                                            <a href="https://saurabh0033.herokuapp.com" target={"_blank"}>
                                                <div className="BuT">
                                                    <Button className='Button'>View Project</Button>
                                                </div>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col className='card-box' md={4} xs={12} sm={12}>
                                <div className="card-content wow fadeInRight" data-wow-delay=".6s" data-wow-duration="3s">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={p6} height={"160px"} width={"100%"} />
                                        <Card.Body>
                                            <Card.Title><h2>Autinguage Machine</h2></Card.Title>

                                            <a href="https://autinguage.netlify.app/" target={"_blank"}>
                                                <div className="BuT">
                                                    <Button className='Button'>View Project</Button>
                                                </div>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
            </>
        )
    }
}

// function Project() {
//     return (
//         <>
//             <div id="features1">
//                 <div class="feature1">
//                     <div class="main-text">
//                         <p>Projects</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="card-container" id='Projects'>
//                 <div className="card-details">
//                     <Row>
//                         <Col className='card-box' md={4} xs={12} sm={12}>
//                             <div className="card-content">
//                                 <Card style={{ width: '100%' }}>
//                                     <Card.Img variant="top" src={p1} height={"160px"} width={"100%"} className="img" />
//                                     <Card.Body>
//                                         <Card.Title><h2>BentZip Website</h2></Card.Title>

//                                         <a href="https://bentzip.com/" target={"_blank"}>
//                                             <div className="BuT">
//                                                 <Button className='Button'>View Project</Button>
//                                             </div>
//                                         </a>
//                                     </Card.Body>
//                                 </Card>
//                             </div>
//                         </Col>
//                         <Col className='card-box' md={4} xs={12} sm={12}>
//                             <div className="card-content">
//                                 <Card style={{ width: '100%' }}>
//                                     <Card.Img variant="top" src={p2} height={"160px"} width={"100%"} />
//                                     <Card.Body>
//                                         <Card.Title><h2>Sample College Website</h2></Card.Title>

//                                         <a href="https://gcoera-site.netlify.app/" target={"_blank"}>
//                                             <div className="BuT">
//                                                 <Button className='Button'>View Project</Button>
//                                             </div>
//                                         </a>
//                                     </Card.Body>
//                                 </Card>
//                             </div>
//                         </Col>
//                         <Col className='card-box' md={4} xs={12} sm={12}>
//                             <div className="card-content">
//                                 <Card style={{ width: '100%' }}>
//                                     <Card.Img variant="top" src={p3} height={"160px"} width={"100%"} />
//                                     <Card.Body>
//                                         <Card.Title><h2>Agency Website</h2></Card.Title>

//                                         <a href="https://agency-website-template.herokuapp.com" target={"_blank"}>
//                                             <div className="BuT">
//                                                 <Button className='Button'>View Project</Button>
//                                             </div>
//                                         </a>
//                                     </Card.Body>
//                                 </Card>
//                             </div>
//                         </Col>
//                         <Col className='card-box' md={4} xs={12} sm={12}>
//                             <div className="card-content">
//                                 <Card style={{ width: '100%' }}>
//                                     <Card.Img variant="top" src={p4} height={"160px"} width={"100%"} />
//                                     <Card.Body>
//                                         <Card.Title><h2>Music Player App</h2></Card.Title>

//                                         <a href="https://saurabh0033.github.io/Music_App_Clone.github.io/" target={"_blank"}>
//                                             <div className="BuT">
//                                                 <Button className='Button'>View Project</Button>
//                                             </div>
//                                         </a>
//                                     </Card.Body>
//                                 </Card>
//                             </div>
//                         </Col>
//                         <Col className='card-box' md={4} xs={12} sm={12}>
//                             <div className="card-content">
//                                 <Card style={{ width: '100%' }}>
//                                     <Card.Img variant="top" src={p5} height={"160px"} width={"100%"} />
//                                     <Card.Body>
//                                         <Card.Title><h2>Gym-website</h2></Card.Title>

//                                         <a href="https://saurabh0033.herokuapp.com" target={"_blank"}>
//                                             <div className="BuT">
//                                                 <Button className='Button'>View Project</Button>
//                                             </div>
//                                         </a>
//                                     </Card.Body>
//                                 </Card>
//                             </div>
//                         </Col>
//                         <Col className='card-box' md={4} xs={12} sm={12}>
//                             <div className="card-content">
//                                 <Card style={{ width: '100%' }}>
//                                     <Card.Img variant="top" src={p6} height={"160px"} width={"100%"} />
//                                     <Card.Body>
//                                         <Card.Title><h2>Autinguage Machine</h2></Card.Title>

//                                         <a href="https://autinguage.netlify.app/" target={"_blank"}>
//                                             <div className="BuT">
//                                                 <Button className='Button'>View Project</Button>
//                                             </div>
//                                         </a>
//                                     </Card.Body>
//                                 </Card>
//                             </div>
//                         </Col>
//                     </Row>

//                 </div>
//             </div>
//         </>
//     );
// }

export default Project;