import React from 'react'
import './Features.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLaptop , faHandPointer, faHandHoldingDollar, faClock } from '@fortawesome/free-solid-svg-icons';
export default function Features() {
  return (
    <div className='features-container'>
      <h2>Features</h2>
      <p></p>
      <div className="features-content">
        <div className="feature">
          <FontAwesomeIcon className='icon' icon={faLock} />
          <p>Security</p>
        </div>

        <div className="feature">
        <FontAwesomeIcon className='icon' icon={faLaptop} />
          <p>Verifiable transactions</p>
        </div>

        <div className="feature">
        <FontAwesomeIcon className='icon' icon={faHandPointer} />
          <p>Easy to use</p>
        </div>

        <div className="feature">
        <FontAwesomeIcon className='icon' icon={faHandHoldingDollar} />
          <p>Cheaper than ballot voting system</p>
        </div>

        <div className="feature">
        <FontAwesomeIcon className='icon' icon={faClock} />
          <p>Faster voting process</p>
        </div>

      </div>
    </div>
  );
}
