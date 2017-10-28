import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies:any;
  constructor(public MovieService:MovieService) { }

  ngOnInit() {
    this.MovieService.getMovies()
      .subscribe(movies => {
        this.movies = movies.results;
      });
  }

}
