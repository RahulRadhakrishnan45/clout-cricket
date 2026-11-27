import './HeritageHero.css'

const heritageDetails = [
  {
    label: 'OUR FOUNDATION',
    title: 'BUILT ON PASSION',
    description: 'A genuine love for cricket.',
  },
  {
    label: 'OUR APPROACH',
    title: 'QUALITY FIRST',
    description: 'Cricket gear selected with care.',
  },
  {
    label: 'PLAYER SCOPE',
    title: 'ALL LEVELS',
    description: 'From beginners to professionals.',
  },
  {
    label: 'OUR COMMUNITY',
    title: 'WORLDWIDE',
    description: 'Passion travels with you.',
  },
];

const HeritageHero = () => {
  return (
    <section className="heritage-hero">
      <div className="page-container">

      <div className="heritage-topbar">
        <span className="heritage-tag">
          <span className="heritage-dot"></span>
          HERITAGE & HEART
        </span>

        <span className="heritage-location">
          CLOUT CRICKET // BUILT FOR THE LOVE OF THE GAME
        </span>
      </div>

      <div className="heritage-content">

        <span className="heritage-eyebrow">
          ABOUT CLOUT CRICKET // OUR STORY
        </span>

        <h1 className="heritage-title">
          MORE THAN CRICKET.
          <br />
          <span>IT'S A FEELING.</span>
        </h1>

        <p className="heritage-description">
          From childhood memories on the cricket field to a passion
          for quality cricket equipment, Clout Cricket was built
          around one simple belief — cricket is more than just a game.
          It's a feeling, a connection, and a way of life.
        </p>

      </div>

      <div className="heritage-cards">
        {heritageDetails.map((item, index) => (
          <div className="heritage-card" key={item.label}>

            <span className="heritage-card-label">
              {item.label}
            </span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default HeritageHero;