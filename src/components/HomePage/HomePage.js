import Header from '../Header/Header';
import Main from './Main/Main';
import AboutUs from './AboutUs/AboutUs';
import OurPlatform from './OurPlatform/OurPlatform'
import Pricing from '../Pricing/Pricing'
import Feedback from './Feedback/Feedback'
import LastSection from './LastSection/LastSection'
import Footer from '../Footer/Footer'

export default function Home() {
    return(
        <>
        <script>
        AOS.init();
        </script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <Header activePage='home' />
            <Main />
            <AboutUs />
            <OurPlatform />
            <Feedback />
            <Pricing />
            <LastSection />
            <Footer /> 
        </> 
    ) 
}