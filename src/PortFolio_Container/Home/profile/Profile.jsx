import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
import WOW from 'wowjs';


class Profile extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {
        return (
            <div id='Home'>
                <div className="profile_container">
                    <div className="profile_parent">
                        <div className="profile_details">
                            <div className="colz wow bounceIn" data-wow-delay=".5s" data-wow-duration="2s">
                                <div className="colz-icon">
                                    <a href="https://www.facebook.com/profile.php?id=100017272480074" target={"_blank"}>
                                        <i class="fa fa-facebook-square"></i>
                                    </a>
                                    <a href="https://www.instagram.com/saurabh_07_official/" target={"_blank"}>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/saurabh1205/" target={"_blank"}>
                                        <i class="fa fa-linkedin-square"></i>
                                    </a>
                                    <a href="https://github.com/saurabh0033" target={"_blank"}>
                                        <i class="fa fa-github-square"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="profile_details-name wow fadeInLeft" data-wow-delay=".6s" data-wow-duration="2s">
                                <span className="primary-text">
                                    {" "}
                                    Hello, I am <span className="highlighted_text">Saurabh</span>
                                </span>
                            </div>
                            <div className="profile-details-role wow fadeIn" data-wow-delay=".6s" data-wow-duration="3s">
                                <span className="primary-text">
                                    {" "}
                                    <h1>
                                        {" "}
                                        <Typical

                                            steps={[
                                                'WordPress Developer ',
                                                1300,

                                                'Engineer ',
                                                1300,

                                                'Web Developer ',
                                                1300,

                                                'Enthusiastic ',
                                                1300,
                                            ]}
                                            loop={Infinity}
                                        />
                                    </h1>
                                    <span className="profile-role-tagline wow fadeIn" data-wow-delay=".6s" data-wow-duration="3s">
                                        Welcome to my PortFolio Website, building apllication with ReactJs.
                                    </span>
                                </span>
                            </div>
                            <div className="profile-options">
                                <a href="#Contact Me">
                                    <button className="btn highlighted-btn wow fadeIn" data-wow-delay=".5s" data-wow-duration="3s">
                                        {" "}
                                        Hire Me{" "}
                                    </button>
                                </a>
                                <a href="Saurabh Chavan.pdf" download="Saurabh Chavan.pdf">
                                    <button className="btn highlighted-btn wow fadeIn" data-wow-delay=".6s" data-wow-duration="3s">Get Resume</button>
                                </a>
                            </div>
                        </div>
                        <div className="profile-picture wow fadeInRight" data-wow-delay=".6s" data-wow-duration="3s">
                            <div className="profile-picture-background"></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


// function Profile() {
//     return (
//         <div id='Home'>
//             <div className="profile_container">
//                 <div className="profile_parent">
//                     <div className="profile_details">
//                         <div className="colz">
//                             <div className="colz-icon">
//                                 <a href="https://www.facebook.com/profile.php?id=100017272480074" target={"_blank"}>
//                                     <i class="fa fa-facebook-square"></i>
//                                 </a>
//                                 <a href="https://www.instagram.com/saurabh_07_official/" target={"_blank"}>
//                                     <i class="fa fa-instagram"></i>
//                                 </a>
//                                 <a href="https://www.linkedin.com/in/saurabh1205/" target={"_blank"}>
//                                     <i class="fa fa-linkedin-square"></i>
//                                 </a>
//                                 <a href="https://github.com/saurabh0033" target={"_blank"}>
//                                     <i class="fa fa-github-square"></i>
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="profile_details-name">
//                             <span className="primary-text">
//                                 {" "}
//                                 Hello, I am <span className="highlighted_text">Saurabh</span>
//                             </span>
//                         </div>
//                         <div className="profile-details-role">
//                             <span className="primary-text">
//                                 {" "}
//                                 <h1>
//                                     {" "}
//                                     <Typical

//                                         steps={[
//                                             'WordPress Developer ',
//                                             1300,

//                                             'Engineer ',
//                                             1300,

//                                             'Web Developer ',
//                                             1300,

//                                             'Enthusiastic ',
//                                             1300,
//                                         ]}
//                                         loop={Infinity}
//                                     />
//                                 </h1>
//                                 <span className="profile-role-tagline">
//                                     Welcome to my PortFolio Website, building apllication with ReactJs.
//                                 </span>
//                             </span>
//                         </div>
//                         <div className="profile-options">
//                             <a href="#Contact Me">
//                                 <button className="btn highlighted-btn">
//                                     {" "}
//                                     Hire Me{" "}
//                                 </button>
//                             </a>
//                             <a href="resume.png" download="resume.png">
//                                 <button className="btn highlighted-btn">Get Resume</button>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="profile-picture">
//                         <div className="profile-picture-background"></div>
//                     </div>
//                 </div>
//             </div>
//             <section >
//                 <div className="content"></div>
//             </section>

//         </div>
//     );
// }

export default Profile;