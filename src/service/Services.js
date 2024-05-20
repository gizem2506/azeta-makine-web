import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class Services extends Component {
  render() {
    let data = [
      {
        pageLink: "service-details-left-sidebar",
        img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        iconClass: "flaticon-002-welding",
        serviceTitle: "Makine Hizmetleri",
        serviceSubtitle:
          "Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor"
      },
      {
        pageLink: "service-details-left-sidebar",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        iconClass: "flaticon-004-walkie-talkie",
        serviceTitle: "İnşaat Hizmetleri",
        serviceSubtitle:
          "Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor"
      },
      {
        pageLink: "service-details-left-sidebar",
        img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        iconClass: "flaticon-015-cart",
        serviceTitle: "Sanayi Hizmetleri",
        serviceSubtitle:
          "Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor"
      },
      {
        pageLink: "service-details-left-sidebar",
        img: "https://images.unsplash.com/photo-1524292332709-b33366a7f165?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        iconClass: "flaticon-010-tank-1",
        serviceTitle: "Tekstil Hizmetleri",
        serviceSubtitle:
          "Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor"
      },
      {
        pageLink: "service-details-left-sidebar",
        img: "https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        iconClass: "flaticon-004-walkie-talkie",
        serviceTitle: "Madencilik Hizmetleri",
        serviceSubtitle:
          "Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor"
      },
      {
        pageLink: "service-details-left-sidebar",
        img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        iconClass: "flaticon-002-welding",
        serviceTitle: "Lojistik Hizmetleri",
        serviceSubtitle:
          "Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor"
      }
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-md-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="service-grid-item">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  <img
                    src={`${val.img}`}
                    className="img-fluid"
                    alt="Service Grid"
                  />
                </a>
              </div>
              <div className="icon">
                <i className={val.iconClass} />
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  {val.serviceTitle}
                </a>
              </h3>
              <p className="subtitle">{val.serviceSubtitle}</p>
             
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/* Navigation bar */}
        <NavBar />


        {/*====================  service page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Service section start*/}
          <div className="service-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="service-item-wrapper">
                    <div className="row">{Datalist}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Service section end*/}
        </div>


        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Services;
