import React, { useState } from 'react'
import FAQ from './FAQ'
import './FAQSection.css'

function FAQSection() {

    const [q0, setQ0] = useState(false)
    const [q1, setQ1] = useState(false)
    const [q2, setQ2] = useState(false)
    const [q3, setQ3] = useState(false)
    const [q4, setQ4] = useState(false)

    return (
        <div className="faqSection">
            <h1>Frequently Asked Questions</h1>
            <FAQ 
                question="What is Netflix?" 
                answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, 
                documentaries and more – on thousands of internet-connected devices. 
                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. 
                There's always something new to discover, and new TV shows and movies are added every week!"
                setShowFAQ={setQ0}
                questionNumber={q0}
            />
            <FAQ 
                question="How much does Netflix cost?"
                answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. 
                Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts."
                setShowFAQ={setQ1}
                questionNumber={q1}
            />
            <FAQ 
                question="Where can I watch?"
                answer="Watch anywhere, anytime, on an unlimited number of devices. 
                Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any 
                internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players 
                and game consoles.
                You can also download your favourite shows with the iOS, Android, or Windows 10 app. 
                Use downloads to watch while you're on the go and without an internet connection. 
                Take Netflix with you anywhere."
                setShowFAQ={setQ2}
                questionNumber={q2}
            />
            <FAQ 
                question="How do I cancel?"
                answer="Netflix is flexible. There are no annoying contracts and no commitments. 
                You can easily cancel your account online in two clicks. 
                There are no cancellation fees – start or stop your account anytime."
                setShowFAQ={setQ3}
                questionNumber={q3}
            />
            <FAQ 
                question="What can I watch on Netflix?"
                answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, 
                award-winning Netflix originals, and more. 
                Watch as much as you want, anytime you want."
                setShowFAQ={setQ4}
                questionNumber={q4}
            />
        </div>
    )
}

export default FAQSection
