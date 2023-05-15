import React from 'react'
import HeroSection from './HeroSection';

const About = ()=>{
    const data = {
        name:'TechnoKart Store',
    }
    return(
       <HeroSection mydata={data}/>
    )
}

export default About;