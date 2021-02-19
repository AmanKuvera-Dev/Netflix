import React, { useEffect, useState } from 'react'
import './SignIn.css'
import TextField from './TextField'
import {Link} from 'react-router-dom'

function SignIn() {

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [validationMsg, setValidationMsg] = useState("")
    const [validationMsgPassword, setValidationMsgPassword] = useState("")
    const [validationOnClick, setValidationOnClick] = useState(false)

    const validateInput = () => {
            if(loginEmail===""){
                setValidationMsg("Please enter a valid email address")
            }
            else{
                if(loginEmail.match(/^[a-zA-Z0-9._]+(@[a-zA-Z])+[?/.a-zA-Z]+$/)){
                    setValidationMsg("")
                }
                else{
                    setValidationMsg("The email should be of format xyz@abc.com")
                }
            }
                
                
            if(loginPassword===""){
                setValidationMsgPassword("Please enter a valid password")
            }
            else{
                if(loginPassword.length < 8){
                    setValidationMsgPassword("The Password must be longer than 8 digits")
                }
                else{
                    setValidationMsgPassword("")
                }
            }
        }

        const validate = (e) =>{
            e.preventDefault();
            setValidationOnClick(true);
        }

        useEffect(() => {
            validateInput()
        })


    return (
        <div className="signIn">
            <div className="signIn__gradient"></div>

            <div className="signIn__body">
                <h1>Sign In</h1>
                <form>
                    <TextField type="email" label="Email ID" fieldValue={loginEmail} setFieldValue={setLoginEmail} required={true} validationMsg={validationMsg}/>
                    <label className={`emailID__label--hide ${(loginEmail !== "" || validationOnClick) && "emailID__label"}`}>{validationMsg}</label>
                    <TextField type="password" label="Password" fieldValue={loginPassword} setFieldValue={setLoginPassword} required={true} validationMsgPassword={validationMsgPassword}/>
                    <label className={`emailID__label--hide ${(loginPassword !== "" || validationOnClick) && "emailID__label"}`}>{validationMsgPassword}</label>
                    <button onClick={(e) => validate(e)}>Sign In</button>
                </form>
                <p>New to Netflix? <Link to="/" className="signIn__bodyLink"><span>Sign up now</span></Link>.</p>
            </div>
        </div>
    )
}

export default SignIn
