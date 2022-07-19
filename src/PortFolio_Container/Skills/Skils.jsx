import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Skills.css';
import WOW from 'wowjs';

import s1 from "../../Assets/Home/s1.png";
import s2 from "../../Assets/Home/s2.jpg";
import s3 from "../../Assets/Home/s3.jpg";
import s4 from "../../Assets/Home/s4.jpg";
import s5 from "../../Assets/Home/s5.png";
import s6 from "../../Assets/Home/s6.png";
import s7 from "../../Assets/Home/s7.png";
import s8 from "../../Assets/Home/s8.jpg";
import s9 from "../../Assets/Home/s9.jpg";
import s10 from "../../Assets/Home/s10.jpg";
import s11 from "../../Assets/Home/s11.png";
import s12 from "../../Assets/Home/s12.png";


class Skills extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div className='skillUnit' id='Skills'>
                <div id="features1">
                    <div class="feature1 wow bounceIn" data-wow-delay=".5s" data-wow-duration="3s">
                        <div class="main-text">
                            <p>Skills</p>
                        </div>
                    </div>
                </div>

                <div className='skill'>
                    <Row>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <div className="skills-picture">
                                <div className="skillse-picture-background">
                                    <img src={s1} alt="" height={"75px"} />
                                </div>
                                <div className="skill-content">
                                    <h2> C Programming</h2>
                                </div>
                            </div>
                        </Col>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <div className="skills-picture">
                                <div className="skillse-picture-background">
                                    <img src={s2} alt="" height={"75px"} />
                                </div>
                                <div className="skill-content">
                                    <h2> C++ Programming</h2>
                                </div>
                            </div>
                        </Col>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <div className="skills-picture">
                                <div className="skillse-picture-background">
                                    <img src={s3} alt="" height={"75px"} />
                                </div>
                                <div className="skill-content">
                                    <h2>JavaScript</h2>
                                </div>
                            </div>
                        </Col>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <div className="skills-picture">
                                <div className="skillse-picture-background">
                                    <img src={s4} alt="" height={"75px"} />
                                </div>
                                <div className="skill-content">
                                    <h2>Python</h2>
                                </div>
                            </div>
                        </Col>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <div className="skills-picture">
                                <div className="skillse-picture-background">
                                    <img src={s5} alt="" height={"75px"} />
                                </div>
                                <div className="skill-content">
                                    <h2>HTML5</h2>
                                </div>
                            </div>
                        </Col>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <div className="skills-picture">
                                <div className="skillse-picture-background">
                                    <img src={s6} alt="" height={"75px"} />
                                </div>
                                <div className="skill-content">
                                    <h2>CSS3</h2>
                                </div>
                            </div>
                        </Col>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <div className="skills-picture">
                                <div className="skillse-picture-background">
                                    <img src={s7} alt="" height={"75px"} />
                                </div>
                                <div className="skill-content">
                                    <h2>ReactJs</h2>
                                </div>
                            </div>
                        </Col>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <div className="skills-picture">
                                <div className="skillse-picture-background">
                                    <img src={s8} alt="" height={"75px"} />
                                </div>
                                <div className="skill-content">
                                    <h2>WordPress</h2>
                                </div>
                            </div>
                        </Col>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <div className="skills-picture">
                                <div className="skillse-picture-background">
                                    <img src={s9} alt="" height={"75px"} />
                                </div>
                                <div className="skill-content">
                                    <h2>Elementor</h2>
                                </div>
                            </div>
                        </Col>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <div className="skills-picture">
                                <div className="skillse-picture-background">
                                    <img src={s10} alt="" height={"75px"} />
                                </div>
                                <div className="skill-content">
                                    <h2>Bootstrap</h2>
                                </div>
                            </div>
                        </Col>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <div className="skills-picture">
                                <div className="skillse-picture-background">
                                    <img src={s11} alt="" height={"75px"} />
                                </div>
                                <div className="skill-content">
                                    <h2>GitHub</h2>
                                </div>
                            </div>
                        </Col>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <div className="skills-picture">
                                <div className="skillse-picture-background">
                                    <img src={s12} alt="" height={"75px"} />
                                </div>
                                <div className="skill-content">
                                    <h2>MySQL</h2>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </div>
        )
    }
}



// const Skills = () => {
//     return (
//         <>
//             <div className='skillUnit' id='Skills'>
//                 <div id="features1">
//                     <div class="feature1">
//                         <div class="main-text">
//                             <p>Skills</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='skill'>
//                     <Row>
//                         <Col className='unit box-1' md={3} xs={6} sm={6}>
//                             <div className="skills-picture">
//                                 <div className="skillse-picture-background">
//                                     <img src={s1} alt="" height={"75px"} />
//                                 </div>
//                                 <div className="skill-content">
//                                     <h2> C Programming</h2>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col className='unit box-1' md={3} xs={6} sm={6}>
//                             <div className="skills-picture">
//                                 <div className="skillse-picture-background">
//                                     <img src={s2} alt="" height={"75px"} />
//                                 </div>
//                                 <div className="skill-content">
//                                     <h2> C++ Programming</h2>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col className='unit box-1' md={3} xs={6} sm={6}>
//                             <div className="skills-picture">
//                                 <div className="skillse-picture-background">
//                                     <img src={s3} alt="" height={"75px"} />
//                                 </div>
//                                 <div className="skill-content">
//                                     <h2>JavaScript</h2>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col className='unit box-1' md={3} xs={6} sm={6}>
//                             <div className="skills-picture">
//                                 <div className="skillse-picture-background">
//                                     <img src={s4} alt="" height={"75px"} />
//                                 </div>
//                                 <div className="skill-content">
//                                     <h2>Python</h2>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col className='unit box-1' md={3} xs={6} sm={6}>
//                             <div className="skills-picture">
//                                 <div className="skillse-picture-background">
//                                     <img src={s5} alt="" height={"75px"} />
//                                 </div>
//                                 <div className="skill-content">
//                                     <h2>HTML5</h2>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col className='unit box-1' md={3} xs={6} sm={6}>
//                             <div className="skills-picture">
//                                 <div className="skillse-picture-background">
//                                     <img src={s6} alt="" height={"75px"} />
//                                 </div>
//                                 <div className="skill-content">
//                                     <h2>CSS3</h2>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col className='unit box-1' md={3} xs={6} sm={6}>
//                             <div className="skills-picture">
//                                 <div className="skillse-picture-background">
//                                     <img src={s7} alt="" height={"75px"} />
//                                 </div>
//                                 <div className="skill-content">
//                                     <h2>ReactJs</h2>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col className='unit box-1' md={3} xs={6} sm={6}>
//                             <div className="skills-picture">
//                                 <div className="skillse-picture-background">
//                                     <img src={s8} alt="" height={"75px"} />
//                                 </div>
//                                 <div className="skill-content">
//                                     <h2>WordPress</h2>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col className='unit box-1' md={3} xs={6} sm={6}>
//                             <div className="skills-picture">
//                                 <div className="skillse-picture-background">
//                                     <img src={s9} alt="" height={"75px"} />
//                                 </div>
//                                 <div className="skill-content">
//                                     <h2>Elementor</h2>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col className='unit box-1' md={3} xs={6} sm={6}>
//                             <div className="skills-picture">
//                                 <div className="skillse-picture-background">
//                                     <img src={s10} alt="" height={"75px"} />
//                                 </div>
//                                 <div className="skill-content">
//                                     <h2>Bootstrap</h2>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col className='unit box-1' md={3} xs={6} sm={6}>
//                             <div className="skills-picture">
//                                 <div className="skillse-picture-background">
//                                     <img src={s11} alt="" height={"75px"} />
//                                 </div>
//                                 <div className="skill-content">
//                                     <h2>GitHub</h2>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col className='unit box-1' md={3} xs={6} sm={6}>
//                             <div className="skills-picture">
//                                 <div className="skillse-picture-background">
//                                     <img src={s12} alt="" height={"75px"} />
//                                 </div>
//                                 <div className="skill-content">
//                                     <h2>MySQL</h2>
//                                 </div>
//                             </div>
//                         </Col>

//                     </Row>
//                 </div>
//             </div>
//         </>
//     )
// }

export default Skills;