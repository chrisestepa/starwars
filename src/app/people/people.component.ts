import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people;
  constructor(public MovieService:MovieService) { }

  ngOnInit() {
    this.MovieService.getPeople()
      .subscribe(people => {
        this.people = people.results;
      });
  }

}
