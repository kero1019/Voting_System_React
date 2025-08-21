import React from 'react'
import Navbar from './Navbar'
import mainPhoto from '../assets/Images/TopMain.png'
import Button from './Button'
export default function LandingPage() {
    return (
        <div className='landing-container'>
            <Navbar />
            <div className="landing-content">
                <img src={mainPhoto} alt="Photo" />
                <div className="landing-button">
                    <Button style={{padding:"2rem", fontSize:"2rem"}}>Register</Button>
                    {/* <Button>Register</Button> */}
                </div>
            </div>
        </div>
    )
}
