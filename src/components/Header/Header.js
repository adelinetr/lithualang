import './Header.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Header ({activePage}) {
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        if (window.innerWidth < 860) {
          setMenuVisible(!menuVisible);
        }
      };
      const closeMenu = () => {
        setMenuVisible(false);
      };

    return(
        <div className="container">
        <header>
        <div className="header">
            <h3>LithuaLingo</h3>

            <nav className="navbar"  style={{ transform: menuVisible ? 'translateX(0)' : 'translateX(100%)' }}>

                <svg onClick={closeMenu} className='close' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3 0.70998C13.2075 0.617276 13.0976 0.543728 12.9766 0.493547C12.8556 0.443366 12.726 0.417535 12.595 0.417535C12.464 0.417535 12.3343 0.443366 12.2134 0.493547C12.0924 0.543728 11.9825 0.617276 11.89 0.70998L6.99999 5.58998L2.10999 0.699979C2.01741 0.607397 1.9075 0.533957 1.78654 0.483852C1.66557 0.433747 1.53593 0.407959 1.40499 0.407959C1.27406 0.407959 1.14442 0.433747 1.02345 0.483852C0.902487 0.533957 0.792576 0.607397 0.699995 0.699979C0.607413 0.792561 0.533973 0.902472 0.483868 1.02344C0.433763 1.1444 0.407974 1.27405 0.407974 1.40498C0.407974 1.53591 0.433763 1.66556 0.483868 1.78652C0.533973 1.90749 0.607413 2.0174 0.699995 2.10998L5.58999 6.99998L0.699995 11.89C0.607413 11.9826 0.533973 12.0925 0.483868 12.2134C0.433763 12.3344 0.407974 12.464 0.407974 12.595C0.407974 12.7259 0.433763 12.8556 0.483868 12.9765C0.533973 13.0975 0.607413 13.2074 0.699995 13.3C0.792576 13.3926 0.902487 13.466 1.02345 13.5161C1.14442 13.5662 1.27406 13.592 1.40499 13.592C1.53593 13.592 1.66557 13.5662 1.78654 13.5161C1.9075 13.466 2.01741 13.3926 2.10999 13.3L6.99999 8.40998L11.89 13.3C11.9826 13.3926 12.0925 13.466 12.2135 13.5161C12.3344 13.5662 12.4641 13.592 12.595 13.592C12.7259 13.592 12.8556 13.5662 12.9765 13.5161C13.0975 13.466 13.2074 13.3926 13.3 13.3C13.3926 13.2074 13.466 13.0975 13.5161 12.9765C13.5662 12.8556 13.592 12.7259 13.592 12.595C13.592 12.464 13.5662 12.3344 13.5161 12.2134C13.466 12.0925 13.3926 11.9826 13.3 11.89L8.40999 6.99998L13.3 2.10998C13.68 1.72998 13.68 1.08998 13.3 0.70998Z" fill="#444444"/>
                </svg>

                <ul>
                    <Link to='/'><li><a className={activePage === 'home' ? 'nav-link active' : 'nav-link'} href="#">Home</a></li></Link>
                    <Link to='/about'><li><a className={activePage === 'about' ? 'nav-link active' : 'nav-link'} href="#">About</a></li></Link> 
                    <Link to='/pricing'><li><a className={activePage === 'pricing' ? 'nav-link active' : 'nav-link'} href="#">Pricing</a></li></Link> 
                    <Link to='/contacts'><li><a className={activePage === 'contacts' ? 'nav-link active' : 'nav-link'} href="#">Contacts</a></li></Link> 
                </ul>
                {/* <div className="button">
                  <button>Get Started</button>
                </div>*/}

            </nav>
            <div className="button">
                  <button className='join-button'>Join Now</button>
            </div>
        </div>

        <svg onClick={toggleMenu} className='menu' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18C3.71667 18 3.479 17.904 3.287 17.712C3.095 17.52 2.99934 17.2827 3 17C3 16.7167 3.096 16.479 3.288 16.287C3.48 16.095 3.71734 15.9993 4 16H20C20.2833 16 20.521 16.096 20.713 16.288C20.905 16.48 21.0007 16.7173 21 17C21 17.2833 20.904 17.521 20.712 17.713C20.52 17.905 20.2827 18.0007 20 18H4ZM4 13C3.71667 13 3.479 12.904 3.287 12.712C3.095 12.52 2.99934 12.2827 3 12C3 11.7167 3.096 11.479 3.288 11.287C3.48 11.095 3.71734 10.9993 4 11H20C20.2833 11 20.521 11.096 20.713 11.288C20.905 11.48 21.0007 11.7173 21 12C21 12.2833 20.904 12.521 20.712 12.713C20.52 12.905 20.2827 13.0007 20 13H4ZM4 8C3.71667 8 3.479 7.904 3.287 7.712C3.095 7.52 2.99934 7.28267 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.48 6.095 3.71734 5.99934 4 6H20C20.2833 6 20.521 6.096 20.713 6.288C20.905 6.48 21.0007 6.71734 21 7C21 7.28334 20.904 7.521 20.712 7.713C20.52 7.905 20.2827 8.00067 20 8H4Z" fill="#444444"/>
        </svg>
        </header>
        </div>
    )
}