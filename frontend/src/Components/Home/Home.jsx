import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import Login from './Login/Login'

function Home() {
    return (
        <div className="home">
            <Navbar/>
            <Login />
        </div>
    )
}

export default Home
