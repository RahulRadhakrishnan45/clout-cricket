import { Store, Check } from 'lucide-react';
import './HomeStudioVisit.css';

const HomeStudioVisit = () => {
  const benefits = [
    'Individual balance and pickup tests',
    'Bespoke weight calibration',
    'Custom grip & toe protection fitment',
    'Warm hospitality & cricket banter',
  ];

  return (
    <section className="studio-visit">
      <div className="page-container studio-visit-container">

        {/* Left Content */}
        <div className="studio-visit-content">

          <div className="studio-visit-label">
            <Store size={15} />
            <span>THE HOME STUDIO VISIT</span>
          </div>

          <h2 className="studio-visit-heading">
            A PERSONAL CONSULTATION
            <br />
            OVER PURE CRICKET.
          </h2>

          <p className="studio-visit-description">
            Visiting Clout Cricket is an unhurried experience.
            Pick up ten bats to find the one whose balance index
            matches your wrist speed. Discuss pitch conditions,
            grip thickness, and personal knocking-in protocols
            directly with our family.
          </p>

          <div className="studio-visit-benefits">
            {benefits.map((benefit, index) => (
              <div className="studio-benefit" key={index}>
                <Check size={16} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Image */}
        <div className="studio-visit-image-wrapper">

          <img
            src="/images/our-story/homevisit.webp"
            alt="Cricket bat being inspected at the Clout Cricket workshop"
            className="studio-visit-image"
          />

          <div className="studio-image-caption">
            THE TEST: PICKUP & WEIGHT DISTRIBUTION
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeStudioVisit;