import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import HeroSliderOne from '../components/HeroSliderOne';
import ServiceGridSlider from '../components/ServiceGridSlider';
import Funfact from '../components/Funfact';
import Footer from '../components/Footer';


class HomeOne extends Component{
    render(){
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderOne/>
                
                {/* Service grid slider */}
                <ServiceGridSlider/>
                
                {/* Fun fact */}
                <Funfact/>
              
              

                {/* Footer */}
                <Footer/>

            </div>
        )
    }
}


export default HomeOne;