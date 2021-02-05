import React from 'react'
import requests from '../../Requests'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Row from '../Row/Row'

function Home() {
    return (
        <div className="home">
            <Navbar/>
            <Banner/>
            <Row category="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
            <Row category="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row category="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row category="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row category="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row category="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row category="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row category="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default Home
