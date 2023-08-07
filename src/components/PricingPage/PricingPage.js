import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Pricing from '../Pricing/Pricing'
import './PricingPage.scss'
import Photo from './photo-lt.png'

export default function PricingPage() {
    return(
        <>
            <Header activePage="pricing" />
            
            <div className="pricing-page-body">
            <div className="intro-pricing">

            <h2 className='mobile-h2'>Affordable and easy learning!</h2>

                <div className="left-container">
                   <img src={Photo} alt="" />
                </div>

                <div className="right-container">
                    <h2>Affordable and easy learning!</h2>
                    <p>We understand that learning a new language can be challenging and time-consuming, so we strive to make it as accessible and enjoyable as possible.</p>
                
                    <div className="button-arrow">
                <svg  className='arrow-down' width="24" height="62" viewBox="0 0 24 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9393 61.0607C11.5251 61.6465 12.4749 61.6465 13.0607 61.0607L22.6066 51.5147C23.1924 50.9289 23.1924 49.9792 22.6066 49.3934C22.0208 48.8076 21.0711 48.8076 20.4853 49.3934L12 57.8787L3.51472 49.3934C2.92893 48.8076 1.97918 48.8076 1.3934 49.3934C0.807609 49.9792 0.807609 50.9289 1.3934 51.5147L10.9393 61.0607ZM10.5 -6.55671e-08L10.5 60L13.5 60L13.5 6.55671e-08L10.5 -6.55671e-08Z" fill="#575757"/>
                </svg>
                <button><a href="#">Learn More</a></button>

                </div>
                
                </div>


            </div>

            <Pricing />
            </div>
            <Footer />
        </>
    )
}