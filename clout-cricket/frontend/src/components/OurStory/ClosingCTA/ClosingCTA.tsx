import {
  MessageSquareText,
  MapPin,
} from 'lucide-react';

import './ClosingCTA.css';
import { WHATSAPP_LINK } from '../../../constants/contact';

const ClosingCTA = () => {
  return (
    <section className="closing-cta">

      <div className="page-container">

        <div className="closing-cta-content">

          <span className="closing-cta-eyebrow">
            OFFICIAL MOTTO & SIGN-OFF
          </span>

          <h2 className="closing-cta-heading">
            CLOUT CRICKET — BORN FROM
            <br className="desktop-break" />
            PASSION. BUILT FOR THE GAME.
          </h2>

          <p className="closing-cta-description">
            Have questions about bat grades, willow grains, or want
            to drop by our home studio? Reach out directly to us.
            We're always ready to talk cricket.
          </p>

          <div className="closing-cta-actions">

            {/* WhatsApp Button */}
            <a
              href={WHATSAPP_LINK("Hi, I'm interested in your cricket products.")}
              target="_blank"
              rel="noopener noreferrer"
              className="closing-cta-button closing-cta-primary"
            >
              <MessageSquareText size={17} />
              <span>CHAT WITH US ON WHATSAPP</span>
            </a>

            {/* Find Us Button */}
            <a
              href="/#find-us"
              className="closing-cta-button closing-cta-secondary"
            >
              <MapPin size={18} />
              <span>VISIT OUR HOME STUDIO / FIND US</span>
            </a>

          </div>

          <p className="closing-cta-tagline">
            AUTHENTIC CRAFTSMANSHIP // PACKED BY HAND //
            WORLDWIDE TRANSIT GUARANTEED
          </p>

        </div>

      </div>

    </section>
  );
};

export default ClosingCTA;