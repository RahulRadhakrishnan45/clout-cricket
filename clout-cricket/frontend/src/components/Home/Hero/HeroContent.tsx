interface HeroContentProps {
    heading: string;
    description: string;
    primaryButton: {
        text: string;
        link: string;
    }
    secondaryButton?: {
        text: string;
        link: string;
    }
}

const HeroContent = ({ heading, description, primaryButton, secondaryButton}: HeroContentProps) => {
    return (
        <div className="hero-content">
            <h1>{heading}</h1>

            <p>{description}</p>

            <div className="hero-buttons">
                <a href={primaryButton.link} className="hero-btn primary-btn">
                    {primaryButton.text}
                </a>

                {secondaryButton && (
                    <a href={secondaryButton.link} className="hero-btn secondary-btn">
                        {secondaryButton.text}
                    </a>
                )}
            </div>
        </div>
    )
}

export default HeroContent