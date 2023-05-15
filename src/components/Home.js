import React from 'react'
import FeatureProducts from './FeatureProducts';
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';

const Home = ()=>{
    const data = {
        name:'TechnoKart E-commerce',
    }
return(
    <>
   <HeroSection mydata = {data}/>
   <FeatureProducts/>
   <Services/>
   <Trusted/>
   </>
)
}

export default Home;