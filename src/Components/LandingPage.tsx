import Button from './Button';
import './LandingPage.scss';
import mainPhoto from '../assets/Images/TopMain.png';

export default function LandingPage() {
  const login = false;
  return (
    <div className="landing-container">
      <div className="landing-content">
        <img src={mainPhoto} alt="Photo" className="main-photo" />

        <div className="landing-button-container">
          {!login && <div>
          <Button className="button blue-button">Register</Button>
          </div>}
            <Button className=" button blue-button">Read More</Button>
        </div>
      </div>
    </div>
  );
}
