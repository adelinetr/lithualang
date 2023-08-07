import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './owl.css';
import AppPhoto1 from './interactive.png';
import AppPhoto2 from './audio-video.png';
import AppPhoto3 from './pricing.png';

class Owldemo1 extends Component {
  render() {
    const options = {
      items: 3,
      loop: false,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
      },
    };

    return (
      <div>
        <div className="container-fluid">
          <div className="title" style={{ marginBottom: "20px" }}>
            <div className="col-sm-12 btn btn-info">
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <OwlCarousel className="owl-theme" {...options}>
            <div><img className="img interactive" src={AppPhoto1} alt="Image 1" /></div>
            <div><img className="img audio-video" src={AppPhoto2} alt="Image 2" /></div>
            <div><img className="img personalized" src={AppPhoto3} alt="Image 3" /></div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owldemo1;