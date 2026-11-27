import {
  HandHeart,
  DoorOpen,
  Goal,
  Globe,
} from 'lucide-react';

import './PillersOfClout.css';

const pillars = [
  {
    number: '01',
    title: 'Childhood Passion',
    description:
      'Built on indelible memories of tape-ball games, local boundary ropes, and the raw thrill of every wicket and last-ball finish. We never lost that pure spark.',
    label: 'Foundational Spirit',
    icon: HandHeart,
  },
  {
    number: '02',
    title: 'Personal & Welcoming',
    description:
      'Far from an impersonal corporate shop. Walk into our home studio, take your stance, tap the toe on the carpet, and talk willow grain with genuine cricket devotees.',
    label: 'Independent Atelier',
    icon: DoorOpen,
  },
  {
    number: '03',
    title: "Every Cricketer's Journey",
    description:
      "Whether you are putting on your first pair of batting gloves, holding the tail for your club on a damp Saturday, or eyeing national squads, we treat every player's kit with dignity.",
    label: 'Universal Access',
    icon: Goal,
  },
  {
    number: '04',
    title: 'Global Brotherhood',
    description:
      'From Sydney to Mumbai, Kingston to Yorkshire — our passion for cricket travels with you. Hand-checked willow carefully dispatched to enthusiasts globally.',
    label: 'Worldwide Reach',
    icon: Globe,
  },
];

const PillarsOfClout = () => {
  return (
    <section className="pillars-section">

      <div className="page-container">

        {/* Section Header */}

        <div className="pillars-header">

          <div className="pillars-heading">
            <span className="pillars-eyebrow">
              Core Discipline
            </span>

            <h2>
              The Pillars of Clout
            </h2>
          </div>

          <p className="pillars-intro">
            How a homegrown passion transforms into an
            unwavering standard of gear selection and
            player relationships.
          </p>

        </div>

        {/* Pillar Cards */}

        <div className="pillars-grid">

          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                className="pillar-card"
                key={pillar.number}
              >

                <div className="pillar-card-header">

                  <span className="pillar-number">
                    Pillar {pillar.number}
                  </span>

                  <Icon
                    className="pillar-icon"
                    size={22}
                    strokeWidth={1.7}
                  />

                </div>

                <div className="pillar-card-content">

                  <h3>{pillar.title}</h3>

                  <p>{pillar.description}</p>

                </div>

                <div className="pillar-card-footer">
                  {pillar.label}
                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default PillarsOfClout;