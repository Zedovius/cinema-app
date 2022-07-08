
import * as dotenv from 'dotenv'
dotenv.config()
import axios from 'axios';
// if (process.env.NODE_ENV !== 'production') {
// }

console.log('por qué no funciono en el navegador?');

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    'api_key': process.env.API_KEY,
  },
});

async function getMoviesPreview() {
    const { data } = await api('trending/movie/day');
    const movies = data.results;

    movies.forEach(movie => {
      const trendingPreviewMoviesContainer = document.querySelector('.movies-reel__movie-container')
      
      const movieContainer = document.createElement('div');
  
      const movieImg = document.createElement('img');
      movieImg.setAttribute('alt', movie.title);
      movieImg.setAttribute(
        'src',
        'https://image.tmdb.org/t/p/w300' + movie.poster_path,
      );
  
      movieContainer.appendChild(movieImg);
      trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
  }


getMoviesPreview();