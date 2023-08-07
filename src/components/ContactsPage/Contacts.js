import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Contacts.scss'

export default function Contacts() {
    return(
        <div>
        <Header activePage='contacts' />
            <div className="contacts-section">
                <h3 className='contact-h3'>Our Contacts</h3>

                <p>If you have any questions or would like to receive more information about our language learning website, please contact us using the following contact details:
                <br /><br />
                Email: lithualingo@gmail.com <br />
                Phone: +370617887523
                <br /><br />
                We will be happy to assist you and provide you with the information you need to succeed in your Lithuanian language learning journey.</p>

            </div>
        <Footer />
        </div>
    )
}