import './Footer.css'
import { WHATSAPP_LINK } from '../../constants/contact'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="page-container">

            <div className="footer-container">

                <div className="footer-brand">
                    <h2>CLOUT<span>CRICKET.</span></h2>

                    <p>
                        Elevate your game. Discover premium cricket
                        equipment and take your performance to the next level.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Explore</h3>
                    <a href="#home">Home</a>
                    <a href="#shop">Shop</a>
                    <a href="#about">About Us</a>
                    <a href={WHATSAPP_LINK("Hi, I'm interested in your cricket products.")}>Contact</a>
                </div>

                <div className="footer-links">
                    <h3>Services</h3>
                    <a href="#bat-repair">Bat Repair</a>
                    <a href="#find-us">Find Us</a>
                    <a href={WHATSAPP_LINK("Hi Clout Cricket! I'm interested in your bat repair services.")}>Talk to Expert</a>
                </div>
            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 Clout Cricket. All Rights Reserved.
                </p>

                <p className='footer-credit'>
                    Crafted with care by{' '}
                    <a href="https://www.linkedin.com/in/rahul-radhakrishnan-mernstack/" target='_blank' rel='noopener noreferrer'>
                        Rahul <span className="external-arrow"></span>
                    </a>
                </p>
            </div>
          </div>
        </footer>
    )
}

export default Footer