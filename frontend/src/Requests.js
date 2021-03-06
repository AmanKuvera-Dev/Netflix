const requests = {
    fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
    trailer: `/videos?api_key=${process.env.REACT_APP_API_KEY}`
};

export default requests