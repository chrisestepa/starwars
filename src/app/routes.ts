import { Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { MovieService } from './services/movie.service';

export const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: SingleMovieComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/:id', component: PersonComponent },
  { path: '**', redirectTo: 'movies' }
];
