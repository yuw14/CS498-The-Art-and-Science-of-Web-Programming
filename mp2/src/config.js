//search
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '?api_key=ea59cae502430892684e13eb5d95b4cf';
const API_URL = 'https://api.themoviedb.org/3/';

//images
const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280'
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w185'

// `${API_URL}/discover/movie?with_genres=${keyword}${API_KEY}`
// '${API_URL}movie/${this.props.location.state.id}${API_KEY}`

// ${IMAGE_BASE_URL}w342${this.state.movie.poster_path}

export { API_URL, SEARCH_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE }