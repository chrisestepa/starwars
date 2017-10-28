import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  movie;
  constructor(public MovieService:MovieService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.getMovie(params['id']);
      });
  }

  getMovie(id) {
    this.MovieService.getSingleMovie(id)
      .subscribe((movie) => this.movie = movie);
  }

}
