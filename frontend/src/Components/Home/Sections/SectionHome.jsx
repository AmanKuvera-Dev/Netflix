import React from 'react'
import './SectionHome.css'

function SectionHome({heading, description, imgSRC, videoSRC, uniqueID, leftSection}) {
    return (
        <div className={`sectionHome ${uniqueID && "sectionHome2"} ${leftSection && "leftImage"}`}>
            <div className="sectionHome__text">
                <h1 className={`${leftSection && "leftText"}`}>{heading}</h1>
                <h2>{description}</h2>
            </div>
            <div className={`sectionHome__image ${uniqueID && "sectionHomeSpacing"}`}>
            <img src={imgSRC} alt=""/>
            {leftSection?
            (<div className="leftCard">
                <div className="leftCard__image">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt=""/>
                </div>
                <div className="leftCard__text">
                    <h1>Stranger Things</h1>
                    <h2>Downloading...</h2>
                </div>
                </div>)
            :(<video id={uniqueID} autoPlay playsInline muted loop>
                <source src={videoSRC} type="video/mp4" />
            </video>)
            }
                
            </div>
        </div>
    )
}

export default SectionHome
