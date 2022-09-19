import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className="landingContainer">
            <div className="landingBox">
                <p className="landingText">Welcome to</p>
                <p className="landingTitle" >The Food App</p>
                <Link to="/home"><button className="homeButton" >Let's cook</button></Link>
            </div>
        </div>
    )
}
