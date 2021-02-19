import React from 'react'
import './TextField.css'

function TextField({type, label, fieldValue, setFieldValue, validationMsg, validationMsgPassword}) {

    return (
        <div className={`textField ${(fieldValue!=="") && (validationMsg !== "") && (validationMsgPassword !== "") && "textField__validate"}`}>
            <input className="textField__input" type={type} value={fieldValue} onChange={(e)=> setFieldValue(e.target.value) }/>
            <label className={`textField__label ${fieldValue && "validLoginInput"}`} >{label}</label>
        </div>
    )
}

export default TextField
