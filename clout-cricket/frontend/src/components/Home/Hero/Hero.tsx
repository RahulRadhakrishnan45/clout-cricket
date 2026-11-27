import HeroContent from "./HeroContent";
import "./Hero.css";

import DesktopImage from "../../../assets/images/cover.webp"
import MobileGif from "../../../assets/images/mob_gif1.gif"

const Hero = () => {
    return (
        
        <section className="hero" id="home">
            
            <picture className="hero-background">
                <source media="(max-width: 768px)" srcSet={MobileGif} />

                <img src={DesktopImage} alt="Clout Cricket" />
            </picture>

            <div className="hero-overlay"></div>

            <HeroContent 
            heading="Play Bold. Play Clout." 
            description="Gear up for every game. Discover quality cricket equipment designed for players who live and breathe cricket."
            primaryButton={{
                text: "Explore Collections",
                link: "/products"
            }}
            secondaryButton={{
                text: "Our Story",
                link: "/about",
            }}
           />
        
        </section>
        
    )
}

export default Hero