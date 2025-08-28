import Navbar from './Navbar';
import Button from './Button';
import './LandingPage.scss';
import mainPhoto from '../assets/Images/TopMain.png';

export default function LandingPage() {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing-content">
        <img src={mainPhoto} alt="Photo" className="main-photo" />

        <div className="landing-button">
          <Button style={{ padding: '1.5rem', fontSize: '2rem', margin:'10rem' }}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
