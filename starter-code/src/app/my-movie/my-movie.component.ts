import { Component, OnInit } from '@angular/core';
import { Movie } from '../services/movies-data';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movieId: string;
  movieInfo: Movie;

  constructor(
    private request: ActivatedRoute,
    public cinemaService: MoviesService,
    private response: Router
  ) { }

  ngOnInit() {

    this.request.paramMap
    .subscribe((myParams) => {
      console.log(myParams);
      this.movieId = myParams.get('movieId');
      let currentMovieId = parseInt(this.movieId);
      this.movieInfo = this.cinemaService.getMovie(currentMovieId);
    });

  }

}
