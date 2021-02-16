import React from 'react'
import FAQSection from './FAQ/FAQSection'
import './Home.css'
import Login from './Login/Login'
import Sections from './Sections/Sections'

function Home() {
    return (
        <div className="home">
            <Login />
            <Sections/>
            <FAQSection/>
            
        </div>
    )
}

export default Home
