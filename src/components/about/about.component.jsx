// import { importSpecifier } from "@babel/types";
import React from "react";

// import CarouselContainer from '../carousel/carousel.component'

// import laptop from '../../assets/laptop.png';
// import trans from '../../assets/blood-trans.jpg';

import './about.styles.css';

function About (){
    return (
        <div className="about-wrapper">
            <div className="about">
                <h4>Blood<span>hq</span> to the rescue</h4>
                <p className="about-message">The pandemic has proven the usefulness and suitability of drones to facilitate medical deliveries at the last-mile.  Blood Headquaters is your first organised drone API System.</p>
            </div>
            {/* <div className="right">
                <h3 className="right-label">Blood<span>HQ</span></h3>
                <CarouselContainer />
            </div> */}
            

        </div>
    )
}

export default About;