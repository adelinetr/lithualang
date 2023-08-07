import PricesProps from './PropsPrices'
import './Pricing.scss'

export default function Pricing() {
    return(
        <>
    <div className="text-part">
            <h4>Choose a suitable plan for your studying!</h4>
            <p>Our flexible pricing options ensure that learning Lithuanian is accessible to all, with budget-friendly plans designed to suit your individual learning goals and preferences.</p>
    </div>

        <div className="pricing-section">
            <PricesProps
            heading='Free Plan'
            description="Access interactive lessons and vocabulary building tools to kick-start your language learning journey and track your progress along the way."
            point1="Basic Phrases"
            point2="Reading Dialogues"
            point3="Progress Tracking"
            button="Try Now"
            className="free-plan"
            pricingH3='free-h3'
            prices='free-section'
             />

            <PricesProps
            heading='Student Plan'
            description="Our basic plan is perfect for beginners who are looking to dip their toes into the Lithuanian language. It includes access to our beginner-level courses and learning materials."
            point1="Quick Reading"
            point2="A1-A2 Exercises"
            point3="Pronunciation"
            price='1.99€/month'
            button="Choose Plan"
            className="student-plan"
            pricingH3='student-h3'
            prices='prices-plan'
             />

            <PricesProps
            heading='Premium Plan'
            description="This plan offers access to a wider range of learning resources, including more advanced course."
            point1="Immerse in Culture"
            point2="B1, B2, C1 Exercises"
            point3="Feedback from native speakers"
            price='5.99€/month'
            button="Choose Plan"
            className="premium-plan"
            pricingH3='premium-h3'
            prices='prices-plan'
            
             />
        </div>
        </>
    )
}