import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  handleScroll() {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? document.getElementById("scroll-top").classList.add("show")
      : document.getElementById("scroll-top").classList.remove("show");
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    return (
      <div>
        {/*====================  footer area ====================*/}
        <div className="footer-area dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-content-wrapper section-space--inner--100">
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12">
                      {/* footer intro wrapper */}
                      <div className="footer-intro-wrapper">
                        <div className="footer-logo">
                          <a href={`${process.env.PUBLIC_URL}/home-one`}>
                            <img
                              src="assets/img/logo/logo2.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="footer-desc">
                       
Makine ve inşaat sektörlerinde faaliyet gösteren bir şirkettir.
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-2 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">SİTE HARİTASI</h4>
                        <ul className="footer-widget__navigation">
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Anasayfa</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/about-us`}>
                              Hakkımızda
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/services`}>Hizmetlerimiz</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/contact-us`}>İletişim</a>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                   
                    <div className="col-xl-2 offset-xl-2 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget mb-0">
                        <h4 className="footer-widget__title">İLETİŞİM</h4>
                        <div className="footer-widget__content">
                          <p className="address">
                          Mahmutbey Mah. Taşocağıyolu Cad. Balance Güneşli NO:19/1A
                          BAĞCILAR
                          </p>
                          <ul className="contact-details">
                            <li>
                              <span>P:</span>99 55 66 88 526
                            </li>
                            <li>
                              <span>F:</span>55 44 77 62
                            </li>
                            <li>
                              <span>E:</span>cons@email.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright-wrapper">
            <div className="footer-copyright text-center">
              <p className="copyright-text">
                &copy;  
                 All Rights Reserved  {new Date().getFullYear()} .            </p>
            </div>
          </div>
        </div>
        {/*====================  End of footer area  ====================*/}
        {/*====================  scroll top ====================*/}
        <button
          className="scroll-top"
          id="scroll-top"
          onClick={this.scrollToTop}
        >
          <i className="ion-android-arrow-up" />
        </button>
        {/*====================  End of scroll top  ====================*/}
      </div>
    );
  }
}

export default Footer;
