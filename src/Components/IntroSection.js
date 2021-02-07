
import '../App.css';
import './introSection.css'
import FamilyTree from '../Images/BAM-family-tree.jpg'


function IntroSection() {
  return (
      <div className="intro-wrapper">
        <div className="intro-header">
          <h4>Beatrice Annie Wilkinson (nee Marten) </h4>
          <p className="date-range">1882-1938</p>
       </div>
      
       <div className="intro-section">
          <div className="intro-text card">
              <p>  My name is XXXname and I am your XXXrelation. </p>
          </div>
          <div className="intro-family-tree card">
            <img className="tree-img" src={FamilyTree} />
          </div>
    
      </div>
    </div>
  );
}

export default IntroSection;
