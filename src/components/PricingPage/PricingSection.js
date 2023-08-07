import './PricingPage.scss'

export default function Prices() {
    return(
        <>
        <div className="more-about-prices">
            <div className="prices-section">
                <p> We have developed three different pricing plans to cater to your individual learning goals and preferences:</p>
            </div>

            <div className="centered-containers">

            <div className="pricing-container">
                <div className="student-pricing">
                    <h3>Student</h3>
                    <p>Our basic plan is perfect for beginners who are looking to dip their toes into the Lithuanian language. It includes access to our beginner-level courses and learning materials.</p>
                    <br />
                    <span>Quick Reading</span><br />
                    <span>A1-A2 Exercises</span><br />
                    <span>Pronunciation</span><br />

                    <div className="price-student">
                        <h4>1.99€/month</h4>
                        <button className="green-button"><a href="#">Choose Plan</a></button>
                    </div>
                </div>

               
                </div>
            </div>
            </div>
        </>
    )
}