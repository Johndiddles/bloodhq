import React from 'react'
import Cover from '../../components/cover/cover.component'
import About from '../../components/about/about.component';
import Guide from '../../components/guide/guide.component'
import Why from '../../components/why/why.component';
import Carousel from '../../components/carousel/carousel.component';
import Testimonies from '../../components/testimonies/testimonies.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.styles.css';

function Homepage (){
    return (
        <>
            <Cover></Cover>
            <About />
            <Guide />
            <Why />
            <Carousel />
            <Testimonies />
        </>
    )
}
        
    


export default Homepage;
