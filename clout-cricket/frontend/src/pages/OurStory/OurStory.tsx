import HeritageHero from '../../components/OurStory/HeritageHero/HeritageHero';
import OriginManifesto from '../../components/OurStory/OriginManifesto/OriginManifesto';
import PillarsOfClout from '../../components/OurStory/PillersOfClout/PillersOfClout';
import HomeStudioVisit from '../../components/OurStory/HomeStudioVisit/HomeStudioVisit';
import ClosingCTA from '../../components/OurStory/ClosingCTA/ClosingCTA';

const OurStory = () => {
  return (
    <main className="our-story-page">
      <HeritageHero />
      <OriginManifesto />
      <PillarsOfClout />
      <HomeStudioVisit />
      <ClosingCTA />
    </main>
  );
};

export default OurStory;