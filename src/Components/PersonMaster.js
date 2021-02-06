
import '../App.css';
import IntroSection from './IntroSection'
import BirthSection from './BirthSection'
import CensusSection from './CensusSection'
import MarriageSection from './MarriageSection'
import WorkSection from './WorkSection'
import DeathSection from './DeathSection'
import LifeSummarySection from './LifeSummarySection'

function PersonMaster() {
  return (
    <div className="person-master">
      <IntroSection />
    <BirthSection/>
    <CensusSection />
    <MarriageSection />
    <WorkSection />
    <DeathSection />
    <LifeSummarySection />

    </div>
  );
}

export default PersonMaster;
