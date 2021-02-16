import React, { useState } from 'react'
import './Login.css'

function Login() {
    
    const[registerEmail,setRegisterEmail] = useState("")
    return (
        <div className="login">

        <div className="login__gradient"/>

        <div className="login__body">
            <>
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                <div className="login__input">
                    <form>
                        <div className="login__inputForm">
                            <input type="email" value={registerEmail} onChange={e=>setRegisterEmail(e.target.value)} required/> 
                            <label className={`login__inputLabel ${registerEmail && "validInput"}`}>Email address</label>
                        </div>
                        <button type="submit">GET STARTED</button>             
                    </form>
                </div>
            </>
        </div>
        </div>
    )
}

export default Login
