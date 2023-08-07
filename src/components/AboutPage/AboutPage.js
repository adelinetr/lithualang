import AboutSection from './AboutSection/AboutSection'
import AppIntro from './AppIntro/AppIntro'
import Header from '../Header/Header'
import YouLearn from '../YouLearn/YouLearn'
import Footer from '../Footer/Footer'
import './AboutPage.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';


export default function AboutPage() {

    useEffect(() =>{
        AOS.init();
    }, []);

    return(
        <>
            <Header activePage="about" />
            <AboutSection />
            <YouLearn />
            <AppIntro />
            <div className="faq-section">
            <h3>FAQ Frequently Asked Questions</h3>
                <details>
                    <summary>How can I get started with learning Lithuanian?</summary>
                    <p data-aos="fade-up" data-aos-duration="1500">Getting started is easy! Simply sign up for an account on our website, choose a suitable learning plan, and you'll have access to our comprehensive resources and interactive lessons.</p>
                </details>

                <details>
                    <summary>Are the lessons suitable for beginners? </summary>
                    <p data-aos="fade-up" data-aos-duration="1500">Absolutely! Our lessons cater to learners of all levels, including beginners. We provide a structured curriculum that gradually introduces the basics of the Lithuanian language, making it accessible and engaging for learners at any stage.</p>
                </details>

                <details>
                    <summary>Can I access the lessons on my mobile device? </summary>
                    <p data-aos="fade-up" data-aos-duration="1500">Yes! Our platform is fully mobile-responsive, allowing you to learn Lithuanian on the go. You can access the lessons and resources from your smartphone or tablet, making it convenient for learning anytime, anywhere.</p>
                </details>

                <details>
                    <summary>Are there any live tutoring sessions available? </summary>
                    <p data-aos="fade-up" data-aos-duration="1500">Yes, we offer live tutoring sessions with experienced Lithuanian language instructors. These sessions provide an opportunity to practice speaking and receive personalized guidance to enhance your language skills. You can schedule tutoring sessions based on your availability.</p>
                </details>

                <details>
                    <summary>Is there a community or forum for learners to interact with each other?</summary>
                    <p data-aos="fade-up" data-aos-duration="1500">Absolutely! We have a vibrant community of learners where you can interact, share your progress, and engage in discussions. You can connect with fellow learners, ask questions, and even participate in language exchange opportunities.</p>
                </details>
            </div>
            <Footer />
        </>
    )
}