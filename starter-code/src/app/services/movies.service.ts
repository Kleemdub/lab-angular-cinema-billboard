import { Injectable } from '@angular/core';
import { Movie, moviesList } from './movies-data';

@Injectable()
export class MoviesService {

  movies: Array<Movie> = [...moviesList];

  constructor() { }

  getMovies() { 
    return this.movies;
  }

  getMovie(id: number) {
    return this.movies.find(movie => movie.id === id);
  }
}



