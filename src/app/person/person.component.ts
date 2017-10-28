import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person;
  constructor(public MovieService:MovieService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.getPerson(params['id']);
      });
  }

  getPerson(id) {
    this.MovieService.getPerson(id)
      .subscribe((person) => this.person = person);
  }

}
