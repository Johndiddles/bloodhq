import React from 'react';

import drone1 from '../../assets/drone1.png';
import drone2 from '../../assets/drone2.png';
import drone3 from '../../assets/drone3.png';
import drone4 from '../../assets/drone4.png';

import cover1 from '../../assets/cover-deliver.svg';
import cover2 from '../../assets/cover-speed.svg';
import cover3 from '../../assets/cover-customer.svg';
import cover4 from '../../assets/cover-quality.svg';

import member1 from '../../assets/member1.png';
import member2 from '../../assets/member2.png';
import member3 from '../../assets/member3.png';
import member4 from '../../assets/member4.png';

import './about.styles.css';

function AboutPage (){
    return (
        <div className="about-page">
            <div className="delivery">
                <div className="inner-delivery">
                    <div className="left-delivery">
                        <h3>Drone Delivery Services</h3>
                        <p>We help save lives by ensuring blood suples and donated blood reaches patients on time.</p>
                            <br></br>
                        <p>Irrespective of the location, our core principle of saving lives comes first, we ensure timely and quality delivery of donated blood to accident victims, hospital emergencies and other emergencies. </p>
                    </div>
                    <div className="right-delivery">
                        <div className="right-top">
                            <img src={drone1} alt="" />
                            <img src={drone2} alt="" />
                            <img src={drone3} alt="" />
                        </div>
                        <div className="right-bottom">
                            <img src={drone4} alt="" />
                        </div>
                    </div>
                </div>

                
            </div>
            <div className="core-values-section">
                    <h3 className="core-values-head">
                        our core values
                    </h3>
                    <div className="values-wrapper">
                        <div className="values-item">
                            <h3 className="values-item-head">
                                Deliver results
                            </h3>
                            <img src={cover1} alt="" className="values-item-img" />
                            <p className="values-item-caption">
                                We always work hard to ensure timely delivery of results to satisfy our clients
                            </p>
                        </div>
                        <div className="values-item">
                            <h3 className="values-item-head">
                                Speed
                            </h3>
                            <img src={cover2} alt="" className="values-item-img" />
                            <p className="values-item-caption">
                                We ensure that our delivery comes in on time as speed is one of our major focus to saving lives
                            </p>
                        </div>
                        <div className="values-item">
                            <h3 className="values-item-head">
                                Customer centric
                            </h3>
                            <img src={cover3} alt="" className="values-item-img" />
                            <p className="values-item-caption">
                                We always put our customers first and take customer reviews seriously
                            </p>
                        </div>
                        <div className="values-item">
                            <h3 className="values-item-head">
                                Quality
                            </h3>
                            <img src={cover4} alt="" className="values-item-img" />
                            <p className="values-item-caption">
                                We ensure maximum quality of blood delivery to the right client
                            </p>
                        </div>
                    </div>
                </div>

                <div className="team">
                    <h3 className="team-header">Meet the team</h3>
                    <div className="members-wrapper">
                        <div className="inner-member-wrapper">
                            <div className="member-card">
                                <img src={member1} alt="" className="member-img" />
                                <h5 className="name">Eric</h5>
                                <p className="skill">Full Stack Developer</p>
                                <p className="role">include designing user interactions on websites, developing servers, and databases for website functionality, and coding for mobile platforms.</p>
                            </div>
                            <div className="member-card">
                                <img src={member2} alt="" className="member-img" />
                                <h5 className="name">Sarah</h5>
                                <p className="skill">Full Stack Developer</p>
                                <p className="role">include designing user interactions on websites, developing servers, and databases for website functionality, and coding for mobile platforms.</p>
                            </div>
                        </div>

                        <div className="inner-member-wrapper bottom">
                            <div className="member-card">
                                <img src={member3} alt="" className="member-img" />
                                <h5 className="name">Rich</h5>
                                <p className="skill">Full Stack Developer</p>
                                <p className="role">include designing user interactions on websites, developing servers, and databases for website functionality, and coding for mobile platforms.</p>
                            </div>
                            
                            <div className="member-card">
                                <img src={member4} alt="" className="member-img" />
                                <h5 className="name">Dan</h5>
                                <p className="skill">Full Stack Developer</p>
                                <p className="role">include designing user interactions on websites, developing servers, and databases for website functionality, and coding for mobile platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AboutPage;