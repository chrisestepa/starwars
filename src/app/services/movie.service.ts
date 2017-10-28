import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class MovieService {

  public BASEURL = environment.BASEURL;

  constructor(private http: Http) { }

  getMovies() {
    return this.http.get(`${this.BASEURL}/films`)
      .map((res) => res.json());
  }

  getSingleMovie(id) {
    return this.http.get(`${this.BASEURL}/films/${id}`)
      .map((res) => res.json());
  }

  getPeople () {
    return this.http.get(`${this.BASEURL}/people`)
      .map ((res) => res.json());
  }

  getPerson (id) {
    return this.http.get(`${this.BASEURL}/people/${id}`)
      .map((res) => res.json());
  }

}
