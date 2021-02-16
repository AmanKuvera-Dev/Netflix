import React from 'react'
import SectionHome from './SectionHome'

function Sections() {
    return (
        <div>
            <SectionHome 
            heading="Enjoy on your TV." 
            description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            imgSRC="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" 
            videoSRC="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"   
            />
            <SectionHome 
            heading="Download your shows to watch offline." 
            description="Save your favourites easily and always have something to watch."
            imgSRC="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" 
            videoSRC="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"  
            leftSection
            />
            <SectionHome 
            heading="Watch everywhere." 
            description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
            imgSRC="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" 
            videoSRC="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"  
            uniqueID="sectionRight2" 
            />
        </div>
    )
}

export default Sections
