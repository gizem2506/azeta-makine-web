import React, {Component} from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper"

class ServiceGridSlider extends Component{
    render(){
        const params = {
            slidesPerView : 3,
            loop: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // Responsive breakpoints
            breakpoints: {
                300:{
                    slidesPerView : 1
                },
                768:{
                    slidesPerView : 2

                },
                992:{
                    slidesPerView : 3
                }
            }
        }
        let data = [
            {img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', iconName: 'flaticon-002-welding', serviceTitle: 'Makine Hizmetleri', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', iconName: 'flaticon-004-walkie-talkie', serviceTitle: 'İnşaat Hizmetleri', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', iconName: 'flaticon-015-cart', serviceTitle: 'Sanayi Hizmetleri', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', iconName: 'flaticon-010-tank-1', serviceTitle: 'Madencilik Hizmetleri', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
        ];

        let DataList = data.map((val, i)=>{
            return(
                <SwiperSlide key={i}>
                    <div className="swiper-slide">
                        <div className="service-grid-item">
                        <div className="service-grid-item__image">
                            <div className="service-grid-item__image-wrapper">
                            <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                                <img src={`${val.img}`} className="img-fluid" alt="" />
                            </a>
                            </div>
                            <div className="icon">
                            <i className={val.iconName} />
                            </div>
                        </div>
                        <div className="service-grid-item__content">
                            <h3 className="title">
                            <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.serviceTitle}</a>
                            </h3>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });
        return(
            <div>
                {/*====================  service grid slider area ====================*/}
                <div className="service-grid-slider-area section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">HİZMETLERİMİZ <span className="title-icon" /></h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="service-slider">
                            <SwiperSlider options={params}>
                                {DataList}
                            </SwiperSlider>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of service grid slider area  ====================*/}

            </div>
        )
    }
}


export default ServiceGridSlider;