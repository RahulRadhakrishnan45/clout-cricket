import './BatRepair.css'
import { WHATSAPP_LINK } from '../../constants/contact';

interface RepairService {
    title: string;
    description: string;
}

const repairServices: RepairService[] = [
    {
        title: "BAT KNOCKING-IN",
        description: "Prepare your bat for the game with professional knocking-in and proper oil conditioning.",
    },
    {
        title: "HANDLE REPLACEMENT",
        description:  "Replace damaged or broken handles to restore your bat's strength and performance.",
    },
    {
        title: "BAT CRACK REPAIR",
        description: "Repair cracks and damaged areas to help extend the life of your cricket bat.",
    },
    {
        title: "TOE GUARD FITTING",
        description:  "Protect your bat's toe from moisture and damage with professional toe guard fitting.",
    },
];

const BatRepair = () => {

    const whatsappLink = WHATSAPP_LINK(
        "Hi Clout Cricket! I'm interested in your bat repair services."
    );

    return (
        <section className='bat-repair'>

            <div className="repair-content">

                <div className="repair-info">
                    <span className='repair-eyebrow'>
                        THE CLOUT STANDARD // BAT CARE & RESTORATION
                    </span>

                    <h2>
                        GIVE YOUR BAT
                        <br />
                        A SECOND LIFE.
                    </h2>

                    <p className='repair-description'>
                         Your cricket bat deserves the best care.
                         At Clout Cricket, we help restore and maintain
                          your trusted willow through professional bat
                           repair and maintenance services.
                    </p>

                    <div className="repair-services">
                        {repairServices.map((service, index) => (
                            <div className="repair-service" key={index}>
                                
                                <h3>{service.title}</h3>

                                <p>{service.description}</p>

                            </div>
                        ))}
                    </div>

                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="repair-button">
                        <span className="repair-arrow">↗</span>
                        BOOK A BAT REPAIR VIA WHATSAPP
                    </a>
                </div>

                <div className="repair-image">
                    <img src="/images/repair.webp" alt="Cricket bat repair and restoration workshop" />

                    <div className="repair-image-caption">

                        <div>
                            <h3>
                                BAT CARE.
                                <br />
                                DONE RIGHT.
                            </h3>

                            <span>
                                CLOUT CRICKET // BAT REPAIR SERVICES
                            </span>
                        </div>

                        <div className="repair-tag">
                            BAT
                            <br />
                            CARE
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BatRepair
