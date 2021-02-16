import React from 'react'
import './FAQ.css'

function FAQ({question, answer,setShowFAQ,questionNumber}) {

    return (
        <div className="faq" onClick={()=> questionNumber? setShowFAQ(false):setShowFAQ(true)}>
            <div className="faq__questionCover">
                <div className="faq__question">
                    <h1>{question}</h1>
                </div>
                <svg className={`faq__close ${questionNumber && "faq__close--cancel"}`} viewBox="0 0 26 26" focusable="true">
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
            </div>
            
            <div className={`faq__answer ${questionNumber && "faq__answer--show"}`}>
                <h1>{answer}</h1>
            </div>
        </div>
    )
}

export default FAQ
