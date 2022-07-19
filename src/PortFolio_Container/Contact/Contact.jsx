import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';
import WOW from 'wowjs';

class Contact extends React.Component {
    // Defining WOW 
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {
        function sendEmail(e) {
            e.preventDefault();

            emailjs.sendForm('service_0a7kyle',
                'template_hqj8mnn',
                e.target,
                's-xNppdRnfmIBb-_6'
            ).then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            alert("Thank For Your Response..! Your Message Sent SuccessFully");
        }
        return (<>
            <div id='Contact Me'>
                <div id="features1">
                    <div className="feature1 wow bounceIn" data-wow-delay=".5s" data-wow-duration="2s">
                        <div class="main-text">
                            <p>Contact Me</p>
                        </div>
                    </div>
                </div>
                <section id="contact">
                    <div class="container">
                        <div class="row Row">
                            <div class="col-md-7 text-lg-center wow fadeInLeft"data-wow-delay=".6s" data-wow-duration="3s">
                                <iframe
                                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.112120058132!2d73.96130341489979!3d18.988114887138472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd311765784c79%3A0xc4f5ab54cf1febbb!2sGovernment%20College%20Of%20Engineering%20And%20Research%2C%20Avasari%20Khurd!5e1!3m2!1sen!2sin!4v1624598004992!5m2!1sen!2sin"}
                                    width={'90%'} height={'610'} frameBorder={0} allowfullscreen>
                                </iframe>
                            </div>
                            <div class="col-md-5 getin wow fadeInRight" data-wow-delay=".6s" data-wow-duration="3s">
                                <h4><strong>GET IN TOUCH</strong></h4>
                                <form onSubmit={sendEmail}>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="name" placeholder="Enter Name" required />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="user_email" placeholder="Enter E-mail"
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <input type="tel" class="form-control" name="user_MN" placeholder="Enter Phone" required />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" rows="3" name="message" placeholder="Insert Message"></textarea>
                                    </div>
                                    <div class="form-check checkbox CheckBox">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                        <label class="form-check-label label" for="invalidCheck2">
                                            Accept All Condition
                                        </label>
                                    </div>
                                    <div className="BuTton">
                                        <button class="btn btn-default button1" type="submit" name="button">
                                            <i class="fas fa-paper-plane " aria-hidden="true"></i> Submit
                                        </button>
                                    </div>
                                </form>
                                <div class="section_media">

                                    <i class=" fas fa-phone-alt fav_icon"></i> <a href="tel:+" class="fav_text"> &nbsp; (+91)
                                        8805315316</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="card-footer">
                        <div class="c-text wow bounceIn"data-wow-delay=".6s" data-wow-duration="3s">
                            <p>
                                All Rights Reserved @2022
                            </p>
                            <p>
                                <a href=""> &copy; Saurabh Chavan</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>)
    }
}







// function Contact() {
//     function sendEmail(e) {
//         e.preventDefault();

//         emailjs.sendForm('service_0a7kyle',
//             'template_hqj8mnn',
//             e.target,
//             's-xNppdRnfmIBb-_6'
//         ).then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//         e.target.reset()
//         alert("Thank For Your Response..! Your Message Sent SuccessFully");
//     }
//     return (
//         <div id='Contact Me'>
//             <div id="features1">
//                 <div class="feature1">
//                     <div class="main-text">
//                         <p>Contact Me</p>
//                     </div>
//                 </div>
//             </div>
//             <section id="contact">
//                 <div class="container">
//                     <div class="row Row">
//                         <div class="col-md-7 text-lg-center">
//                             <iframe
//                                 src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.112120058132!2d73.96130341489979!3d18.988114887138472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd311765784c79%3A0xc4f5ab54cf1febbb!2sGovernment%20College%20Of%20Engineering%20And%20Research%2C%20Avasari%20Khurd!5e1!3m2!1sen!2sin!4v1624598004992!5m2!1sen!2sin"}
//                                 width={'90%'} height={'610'} frameBorder={0} allowfullscreen>
//                             </iframe>
//                         </div>
//                         <div class="col-md-5 getin" >
//                             <h4><strong>GET IN TOUCH</strong></h4>
//                             <form onSubmit={sendEmail}>
//                                 <div class="form-group">
//                                     <input type="text" class="form-control" name="name" placeholder="Enter Name" required />
//                                 </div>
//                                 <div class="form-group">
//                                     <input type="email" class="form-control" name="user_email" placeholder="Enter E-mail"
//                                         required />
//                                 </div>
//                                 <div class="form-group">
//                                     <input type="tel" class="form-control" name="user_MN" placeholder="Enter Phone" required />
//                                 </div>
//                                 <div class="form-group">
//                                     <textarea class="form-control" rows="3" name="message" placeholder="Insert Message"></textarea>
//                                 </div>
//                                 <div class="form-check checkbox CheckBox">
//                                     <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
//                                     <label class="form-check-label label" for="invalidCheck2">
//                                         Accept All Condition
//                                     </label>
//                                 </div>
//                                 <div className="BuTton">
//                                     <button class="btn btn-default button1" type="submit" name="button">
//                                         <i class="fas fa-paper-plane " aria-hidden="true"></i> Submit
//                                     </button>
//                                 </div>
//                             </form>
//                             <div class="section_media">

//                                 <i class=" fas fa-phone-alt fav_icon"></i> <a href="tel:+" class="fav_text"> &nbsp; (+91)
//                                     8805315316</a>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 <div class="card-footer">
//                     <div class="c-text">
//                         <p>
//                             All Rights Reserved @2022
//                         </p>
//                         <p>
//                             <a href=""> &copy; Saurabh Chavan</a>
//                         </p>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

export default Contact;