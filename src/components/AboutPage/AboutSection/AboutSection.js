
import AppPhoto from './images/hand-app.png'

export default function AboutSection() {
    return(
        <>
            <div className="about-us">

            <div className="left-photo">
                <img src={AppPhoto} className='hand-photo' />
            </div>

            <div className="right-text">
                <h4 className='main-h3'>About Us </h4>
                <p>
                At LithuaLingo, we understand that learning a new language can be a challenging task. That's why we've designed our platform to be user-friendly, interactive, and engaging, so you can enjoy the learning process and see progress in your language skills.
                <br /><br />
                Our team of experienced language teachers and experts have carefully crafted our courses and materials to cater to learners of all levels, from beginners to advanced speakers. We believe in a communicative approach to language learning, where you are encouraged to speak, listen, and practice from the very first lesson.
                <br /><br />
                In addition to our comprehensive courses, we offer a range of learning tools and resources to enhance your learning experience, including quizzes, interactive exercises, and cultural insights.
                <br /><br />
                At LithuaLingo, we are passionate about sharing the beauty and richness of Lithuanian language and culture with the world. We are committed to providing high-quality language education that is accessible and affordable for all.
                </p>
            </div>
            
            </div>
        </>
    )
}

