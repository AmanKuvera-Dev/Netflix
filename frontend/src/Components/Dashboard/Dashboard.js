import {useRef} from 'react'
import requests from '../../Requests'
import Banner from './Banner/Banner'
import Row from './Row/Row'
import './Dashboard.css'

function Home() {

    const Originals = useRef(null);
    const Trending = useRef(null);
    const Top = useRef(null);
    const Action = useRef(null);
    const Comedy = useRef(null);
    const Horror = useRef(null);
    const Romantic = useRef(null);
    const Documentaries = useRef(null);

    return (
        <div className="dashboard">
            <Banner/>
            <Row category="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} refName={Originals}/>
            <Row category="Trending Now" fetchUrl={requests.fetchTrending} refName={Trending}/>
            <Row category="Top Rated" fetchUrl={requests.fetchTopRated} refName={Top}/>
            <Row category="Action Movies" fetchUrl={requests.fetchActionMovies} refName={Action}/>
            <Row category="Comedy Movies" fetchUrl={requests.fetchComedyMovies} refName={Comedy}/>
            <Row category="Horror Movies" fetchUrl={requests.fetchHorrorMovies} refName={Horror}/>
            <Row category="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} refName={Romantic}/>
            <Row category="Documentaries" fetchUrl={requests.fetchDocumentaries} refName={Documentaries}/>
        </div>
    )
}

export default Home
