import { useEffect } from 'react';
import './aboutUs.scss'
import AppPhoto from './images/app.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUs() {
    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <section data-aos="fade-in" delay="400" data-aos-duration="3000" className='aboutUs'>
        <h3 className='mobile-h3'>About us</h3>
            <div className="left-side-about">
                <svg className='ellipse' width="425" height="425" viewBox="0 0 425 425" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className='big-c' cx="212.5" cy="212.5" r="212.5" fill="#65B674"/>
                    <ellipse className='medium-c' cx="212.5" cy="212" rx="185.5" ry="185" fill="#88D596"/>
                    <ellipse className='small-c' cx="212.5" cy="212" rx="159.5" ry="160" fill="#BDEBC5"/>
                </svg>
                <img className='appPhoto' src={AppPhoto} alt="" />
            </div>

            <div className="right-side-about">
                <h3 className='non-mobile-h3'>About Us</h3>
                <p className='about-p'>We are a team of passionate language enthusiasts who understand the importance of effective language learning and want to share our knowledge and experience with you.
        <br /><br />
Our goal is to help you achieve fluency in Lithuanian language, and we believe that the best way to achieve this is through a combination of formal lessons and immersive experiences.</p>
            </div>
        </section>
    )
}