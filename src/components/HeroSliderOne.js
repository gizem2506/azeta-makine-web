import React, {Component} from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper"

class HeroSliderOne extends Component{
    
    render(){
        const params = {
            slidesPerView : 1,
            loop: false,
            navigation: true,
            autoplay: {
                delay: 5500,
                disableOnInteraction: false,
            },
        }

        let data = [
            {bgImg: 'slider3.jpg', sliderTitle: 'Build Your Dream With Passion', sliderSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', btnLink: 'contact-us'},
           
        ];

        let DataList = data.map((val, i)=>{
            return(
                <SwiperSlide key={i}>
                    <div className="hero-slider__single-item" style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }} >
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                    <div className="hero-slider__content">
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });

        return(
            <div>
                {/*====================  hero slider area ====================*/}
                <div className="hero-alider-area">
                    <SwiperSlider options={params}>
                        {DataList}
                    </SwiperSlider>
                </div>
                {/*====================  End of hero slider area  ====================*/}

            </div>
        )
    }
}

export default HeroSliderOne;