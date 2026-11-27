import {
  Hammer,
  Heart,
  Award,
  ShieldCheck,
  ArrowUpRight,
  House,
} from 'lucide-react';

import './OriginManifesto.css';

const OriginManifesto = () => {
  return (
    <section className="origin-manifesto">

      <div className="page-container">

      <div className="origin-container">

        <div className="origin-visuals">

          <div className="origin-main-image">

            <img
              src="/images/our-story/fix.webp"
              alt="Traditional cricket bat craftsmanship"
            />

            <div className="origin-image-label">

              <div className="origin-image-label-content">
                <span>SPEC // CRAFT</span>
                <h4>PRIVATE BAT CLEFT SELECTION</h4>
              </div>

              <Hammer size={20} />

            </div>

          </div>

          <div className="origin-atelier-grid">

            <div className="origin-atelier-image">

              <img
                src="/images/our-story/studio.jpeg"
                alt="Clout Cricket home workshop"
              />

              <div className="origin-atelier-image-caption">
                <span>OUR HOME STORE</span>
                <p>Walk In As Enthusiasts</p>
              </div>

            </div>

            <div className="origin-atelier-info">

              <span className="origin-atelier-label">
                ATELIER ETHOS
              </span>

              <h3>
                HOME ATELIER & FELLOW ENTHUSIAST SPACE
              </h3>

              <p>
                A warm domestic haven dedicated to the sound of leather
                on willow. No sales pitch, just shared devotion.
              </p>

            </div>

          </div>

          <div className="origin-founder-note">

            <div className="origin-founder-heading">
              <Award size={17} />
              <span>FOUNDER'S NOTE</span>
            </div>

            <blockquote>
              "We didn't start in an industrial park or corporate retail
              showroom. We opened our front door to people who revere
              the game."
            </blockquote>

          </div>

        </div>

        <div className="origin-content">

          <div className="origin-eyebrow">
            <span className="origin-eyebrow-line"></span>
            <span>ORIGIN MANIFESTO</span>
          </div>

          <h2>
            BUILT FROM LOVE.
            <br />
            CARRIED THROUGH GENERATIONS.
          </h2>

          <p className="origin-lead">
            At Clout Cricket, cricket has never been just a game.
            It's a passion we've carried since childhood — from
            those endless hours playing with friends to the
            excitement of every boundary, wicket and last-over finish.
          </p>


          <p className="origin-description">
            Built from a genuine love for the game, Clout Cricket
            is more than just a cricket accessories store. It's a
            small venture with a big passion behind it. What started
            with a love for cricket has grown into a place where
            fellow cricket lovers can find the gear they need to
            follow their passion.
          </p>

          <div className="origin-quote-card">

            <div className="origin-quote-icon">
              <House size={28} />
            </div>

            <div className="origin-quote-content">

              <span>AN UNLIKE ANY OTHER EXPERIENCE</span>

              <blockquote>
                "OUR STORE, NESTLED WITHIN OUR HOME, REFLECTS
                EXACTLY WHO WE ARE — WELCOMING, PERSONAL AND
                BUILT WITH HEART. WE WANT EVERY CUSTOMER WHO
                WALKS THROUGH OUR DOORS TO FEEL LESS LIKE
                THEY'RE VISITING A SHOP AND MORE LIKE THEY'RE
                VISITING A FELLOW CRICKET ENTHUSIAST."
              </blockquote>

            </div>

          </div>


          <p className="origin-description">
            Whether you're just starting your cricket journey,
            playing for your local team, or chasing bigger dreams
            on the field, we're here to help you gear up for
            every innings.
          </p>

          <p className="origin-closing">
            And no matter where you are in the world, our passion
            for cricket travels with you.
          </p>


          <div className="origin-values">

            <div className="origin-value-card">
              <Heart size={23} />

              <h4>PASSION</h4>

              <p>
                Driven by an unconditional love for cricket.
              </p>
            </div>


            <div className="origin-value-card">
              <Award size={23} />

              <h4>CRAFT</h4>

              <p>
                Respecting the details that make quality.
              </p>
            </div>


            <div className="origin-value-card">
              <ShieldCheck size={23} />

              <h4>TRUST</h4>

              <p>
                Building relationships that last beyond the game.
              </p>
            </div>

          </div>


          <a href="/#shop" className="origin-explore-link">
            EXPLORE OUR COLLECTION
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>
    </div>
    </section>
  );
};

export default OriginManifesto;