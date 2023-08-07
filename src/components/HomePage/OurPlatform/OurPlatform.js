import { useEffect } from 'react';
import './ourPlatform.scss'
import PlatformResouces from './PlatformResources/PlatformResources'
import AOS from 'aos';
import 'aos/dist/aos.css';
import OwlCarousel1 from '../../Owldemo1';
import AppPhoto from './images/interactive.png'


export default function OurPlatform() {
    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <div className="second-s">

        <h5>With our app you can study Lithuanian wherewhere you are</h5>


        <svg className='arrow' width="273" height="117" viewBox="0 0 273 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2C64.5 63.5 67 104.1 271 102.5" stroke="#E4AD55" stroke-width="3"/>
                <path d="M228.5 89.5L271.5 102.5" stroke="#E4AD55" stroke-width="3" stroke-linecap="round"/>
                <path d="M228.5 115.5L271.5 102.5" stroke="#E4AD55" stroke-width="3" stroke-linecap="round"/>
            </svg>
        

        <div className="howTo">

            <div className="left-side-platform">
                <PlatformResouces
                heading="Interactive Lessons"
                description="Each lesson is carefully crafted to cover different aspects of the language and includes quizzes and exercises to reinforce your learning."     
           

                />
                <PlatformResouces
                heading="Audio and Video Materials"
                description="You can listen to dialogues, watch short films, or even follow along with Lithuanian songs to immerse yourself in the language."     
         
                />
                <PlatformResouces
                heading="Personalized Learning"
                description="You can choose to focus on specific topics, such as business or travel, and track your progress through our platform."     
    
                />
                
            </div>


            <div className="slider">
            <div className="right-side-platform owl-carousel">
                <OwlCarousel1 />
            </div>
            </div>

        </div>

        </div>
    )
}