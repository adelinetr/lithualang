import FeedbackProps from './FeedbackProps'
import Person1 from './images/person01.png'
import Person2 from './images/person02.png'
import Person3 from './images/person03.png'

export default function Feedback() {
    const feedbackData = [
        {
          heading: '"Learning Lithuanian with this platform has been a game changer for me!"',
          feedback:
            'The interactive lessons, audio and video materials, and personalized learning approach have all helped me to improve my Lithuanian language skills significantly. I highly recommend this platform to anyone who is serious about learning Lithuanian!',
          image: Person1,
        },
        {
            heading: '"The platform made learning Lithuanian so enjoyable!"',
            feedback:
              'The engaging lessons, supportive community, and well-designed interface have made learning Lithuanian a fun and immersive experience. I can see my progress clearly and feel motivated to continue learning. Thank you!',
            image: Person2,
          },
          {
            heading: `"I've noticed a big improvement in my Lithuanian skills since I started using LithuaLang!"`,
            feedback:
              'I just wanted to say how amazing my experience has been learning Lithuanian on LithuaLand! The lessons are really fun and easy to follow. I love that they have videos and audio to help me practice speaking and understanding the language.',
            image: Person3,
          },
          // Add more feedback objects as needed
      ];
    
      return (
        <>
          <FeedbackProps feedbackData={feedbackData} />
        </>
      );
    }