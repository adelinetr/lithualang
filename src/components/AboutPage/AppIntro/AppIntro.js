import AppIntroImg from './images/app-intro.png'
import './AppIntro.scss'

export default function AboutSection() {
    return(
        <>
            <div className="app-intro">

            <div className="left-description">

            <h4>How does our app work?</h4>

                <p>
                Our app uses a variety of interactive tools and features to create a dynamic and engaging learning experience. 
                <br /> Here's how it works:
                <br /><br />
                <ol>
                    <li> <span>Assessment test: </span>  To ensure that you start at the right level, our app begins with a brief assessment test that evaluates your current knowledge of Lithuanian. Based on your results, the app will create a personalized learning plan tailored to your specific needs and goals.</li>
                    <br />
                    <li> <span> Interactive lessons: </span>  Our app features a variety of interactive lessons that incorporate listening, speaking, reading, and writing skills. The lessons are designed to be both fun and challenging, and include a range of multimedia content, such as videos, images, and audio recordings.</li>
                    <br />
                    <li> <span> Vocabulary builder:</span> Our app includes a comprehensive vocabulary builder that allows you to learn new words and phrases in a fun and engaging way. You can practice your new vocabulary through interactive flashcards, quizzes, and games.</li>
                    <br />
                    <li> <span> Progress tracking: </span> With our app, you can easily track your progress and see how much you have learned. The app keeps track of your scores and completion rates, and provides you with personalized feedback and recommendations to help you improve your skills.</li>
                    <br />
                </ol>
                </p>

            </div>

            <div className="right-app">
                <img src={AppIntroImg} alt="" />
            </div>

            </div>
        </>
    )
}

