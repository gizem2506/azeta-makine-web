import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div

        >

        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--top--120">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-image-two">
                    <img src="https://images.unsplash.com/photo-1516548850013-cc2901525f8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                   
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h1>     Biz Kimiz?</h1>
                    <h4>
                      Azeta Makine İnşaat Sanayi ve Ticaret Şirketi, yenilikçi çözümler ve üstün hizmet anlayışı ile makine, inşaat ve sanayi sektörlerinde faaliyet gösteren lider bir şirkettir. Kuruluşumuzdan bu yana, müşterilerimize en yüksek kalitede hizmet sunmayı ve sektörümüzde öncü olmayı hedefliyoruz.
                    </h4>
                    <p>

                      Güçlü mühendislik altyapımız ve tecrübeli kadromuz ile geniş bir yelpazede hizmetler sunmaktayız. Makine imalatı, inşaat projeleri ve sanayi hizmetleri konularında uzmanlaşmış ekibimiz, her türlü teknik ve operasyonel ihtiyaca cevap verebilecek kapasitededir.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Feature Icon */}
          <FeatureIcon background="grey-bg" />


          {/*About section end*/}



        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;
