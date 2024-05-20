import React, { Component } from 'react';

class FeatureIcon extends Component{
    render(){

        let data = [
            {featureIcon: "feature-1.png", featureTitle: "En İyi Hizmet", featureDescription: "Azeta Makine İnşaat Sanayi ve Ticaret Şirketi olarak, müşterilerimize en üstün hizmeti sunmak için çalışıyoruz. Her projede kaliteyi ve mükemmelliği ön planda tutarak, sektörde lider konumdayız."},
            {featureIcon: "feature-2.png", featureTitle: "En İyi Kalite", featureDescription: "Üstün mühendislik ve kaliteli malzemeler ile Azeta Makine İnşaat Sanayi ve Ticaret Şirketi, her zaman en yüksek standartları hedefler. Uzman ekibimiz ve modern teknoloji kullanımı ile projelerinizi zamanında ve eksiksiz olarak teslim ediyoruz. "},
            {featureIcon: "feature-3.png", featureTitle: "Uygun Maliyet", featureDescription: "Azeta Makine İnşaat Sanayi ve Ticaret Şirketi olarak, maliyet etkin çözümler sunarak müşterilerimizin bütçelerini koruyoruz. Verimliliği artıran ve maliyetleri düşüren yenilikçi yöntemlerimiz ile kaliteli hizmeti uygun fiyatlarla sunuyoruz."}
        ];

        let Datalist = data.map((val, i)=>{
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="feature">
                    <div className="icon">
                        <img src={`assets/img/icons/${val.featureIcon}`} className="img-fluid" alt="" />
                    </div>
                    <div className="content">
                        <h3>{val.featureTitle}</h3>
                        <p>{val.featureDescription}</p>
                    </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                {/*Feature section start*/}
                <div className={`feature-section section-space--inner--100 ${this.props.background}`}>
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="feature-item-wrapper">
                                <div className="row">
                                    {Datalist}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Feature section end*/}
            </div>
        )
    }
}

export default FeatureIcon;