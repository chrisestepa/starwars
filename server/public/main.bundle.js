webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".router {\n  margin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"router\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__movie_list_movie_list_component__ = __webpack_require__("../../../../../src/app/movie-list/movie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__single_movie_single_movie_component__ = __webpack_require__("../../../../../src/app/single-movie/single-movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__people_people_component__ = __webpack_require__("../../../../../src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__person_person_component__ = __webpack_require__("../../../../../src/app/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__movie_list_movie_list_component__["a" /* MovieListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__single_movie_single_movie_component__["a" /* SingleMovieComponent */],
            __WEBPACK_IMPORTED_MODULE_9__people_people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_11__person_person_component__["a" /* PersonComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_movie_service__["a" /* MovieService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/movie-list/movie-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  margin-top: 10px;\n}\n\n.container {\n  width: 100%;\n  text-align: center;\n}\n\n.movie {\n  margin: 10px;\n  width: 20%;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.img {\n  margin: 0 auto;\n  max-width: 200px;\n}\n\n.img img {\n  width: 100%;\n  max-height: 300px;\n}\n\n.people {\n  margin-top: 20px;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n.search {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie-list/movie-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n  <label for=\"things_name\"> Search by title: </label>\n  <input id=\"things_name\" placeholder=\"use the force...\" type=\"text\" [(ngModel)]=\"pattern\">\n</div>\n<div class=\"container\">\n  <div>\n    <div *ngFor=\"let movie of movies | filter:'title':pattern;\" class=\"movie\">\n      <h6>Episode: {{movie.episode_id}}</h6>\n      <div class=\"img\">\n        <a [routerLink]=\"[movie.url[movie.url.length-2]]\"><img src=\"/assets/img/{{movie.episode_id}}.jpg\"></a>\n      </div>\n      <h6 class=\"title\">{{movie.title}}</h6>\n    </div>\n  </div>\n</div>\n\n<div class=\"people\">\n  <app-people></app-people>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/movie-list/movie-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieListComponent = (function () {
    function MovieListComponent(MovieService) {
        this.MovieService = MovieService;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MovieService.getMovies()
            .subscribe(function (movies) {
            _this.movies = movies.results;
        });
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-movie-list',
        template: __webpack_require__("../../../../../src/app/movie-list/movie-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/movie-list/movie-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */]) === "function" && _a || Object])
], MovieListComponent);

var _a;
//# sourceMappingURL=movie-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/people/people.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  text-align: center;\n}\n\n.container {\n    width: 70%;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    white-space: nowrap;\n    margin-bottom: 80px;\n    box-shadow: 1px 1px 10px #999;\n}\n\n.person {\n    width: 300px;\n    margin: 2px;\n    max-height: 200px;\n    cursor: pointer;\n    display:inline-block;\n    vertical-align:top;\n    text-align: center;\n }\n\n img {\n   height: 150px;\n }\n\n a:hover {\n   text-decoration: none;\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"title\">Choose your character...</h5>\n<div *ngIf=\"people\" class=\"container\">\n  <div *ngFor=\"let person of people\" class=\"person\">\n      <h6>{{person.name}}</h6>\n      <a [routerLink]=\"['/people/'+person.url.substr(28)]\"><img src=\"/assets/img/{{person.name}}.png\"></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleComponent = (function () {
    function PeopleComponent(MovieService) {
        this.MovieService = MovieService;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MovieService.getPeople()
            .subscribe(function (people) {
            _this.people = people.results;
        });
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-people',
        template: __webpack_require__("../../../../../src/app/people/people.component.html"),
        styles: [__webpack_require__("../../../../../src/app/people/people.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */]) === "function" && _a || Object])
], PeopleComponent);

var _a;
//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/person/person.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 0 auto;\n}\n\n.poster > img {\n  max-width: 300px;\n  max-height: 600px;\n  float: left;\n  margin: 10px;\n}\n\n.data {\n  width: 40%;\n  float: left;\n  margin: 10px 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"person\" class=\"person\">\n    <div class=\"poster\">\n      <img src=\"/assets/img/{{person.name}}.png\" alt=\"\">\n    </div>\n    <div class=\"data\">\n      <h1>{{person.name}}</h1>\n      <p><b>Height: </b>{{person.height}}</p>\n      <p><b>Mass: </b>{{person.mass}}</p>\n      <p><b>Hair color: </b>{{person.hair_color}}</p>\n      <p><b>Skin color: </b>{{person.skin_color}}</p>\n      <p><b>Eye color: </b>{{person.eye_color}}</p>\n      <p><b>Birth year: </b>{{person.birth_year}}</p>\n      <p><b>Gender: </b>{{person.gender}}</p>\n      <a [routerLink]=\"['']\">Back</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonComponent = (function () {
    function PersonComponent(MovieService, route) {
        this.MovieService = MovieService;
        this.route = route;
    }
    PersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.getPerson(params['id']);
        });
    };
    PersonComponent.prototype.getPerson = function (id) {
        var _this = this;
        this.MovieService.getPerson(id)
            .subscribe(function (person) { return _this.person = person; });
    };
    return PersonComponent;
}());
PersonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-person',
        template: __webpack_require__("../../../../../src/app/person/person.component.html"),
        styles: [__webpack_require__("../../../../../src/app/person/person.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PersonComponent);

var _a, _b;
//# sourceMappingURL=person.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        var myPattern = new RegExp(value, 'i');
        return items.filter(function (it) { return it[field].match(myPattern); });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__movie_list_movie_list_component__ = __webpack_require__("../../../../../src/app/movie-list/movie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single_movie_single_movie_component__ = __webpack_require__("../../../../../src/app/single-movie/single-movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__people_people_component__ = __webpack_require__("../../../../../src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_person_component__ = __webpack_require__("../../../../../src/app/person/person.component.ts");




var routes = [
    { path: 'movies', component: __WEBPACK_IMPORTED_MODULE_0__movie_list_movie_list_component__["a" /* MovieListComponent */] },
    { path: 'movies/:id', component: __WEBPACK_IMPORTED_MODULE_1__single_movie_single_movie_component__["a" /* SingleMovieComponent */] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_2__people_people_component__["a" /* PeopleComponent */] },
    { path: 'people/:id', component: __WEBPACK_IMPORTED_MODULE_3__person_person_component__["a" /* PersonComponent */] },
    { path: '**', redirectTo: 'movies' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEURL;
    }
    MovieService.prototype.getMovies = function () {
        return this.http.get(this.BASEURL + "/films")
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.getSingleMovie = function (id) {
        return this.http.get(this.BASEURL + "/films/" + id)
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.getPeople = function () {
        return this.http.get(this.BASEURL + "/people")
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.getPerson = function (id) {
        return this.http.get(this.BASEURL + "/people/" + id)
            .map(function (res) { return res.json(); });
    };
    return MovieService;
}());
MovieService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MovieService);

var _a;
//# sourceMappingURL=movie.service.js.map

/***/ }),

/***/ "../../../../../src/app/single-movie/single-movie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 0 auto;\n}\n\n.poster > img {\n  width: 400px;\n  float: left;\n  margin: 10px;\n}\n\n.movie {\n  width: 40%;\n  float: left;\n  margin: 10px 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/single-movie/single-movie.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\" class=\"container\">\n  <div class=\"poster\">\n    <img src=\"/assets/img/{{movie.episode_id}}.jpg\" alt=\"\">\n  </div>\n  <div class=\"movie\">\n    <h1>{{movie.title}}</h1>\n    <p><b>Episode: </b>{{movie.episode_id}}</p>\n    <p><b>Date of release: </b>{{movie.release_date | date}}</p>\n    <p><b>Directed by: </b>{{movie.director}}</p>\n    <p><b>Produced by: </b>{{movie.producer}}</p>\n    <a [routerLink]=\"['']\">Back</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/single-movie/single-movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleMovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleMovieComponent = (function () {
    function SingleMovieComponent(MovieService, route) {
        this.MovieService = MovieService;
        this.route = route;
    }
    SingleMovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.getMovie(params['id']);
        });
    };
    SingleMovieComponent.prototype.getMovie = function (id) {
        var _this = this;
        this.MovieService.getSingleMovie(id)
            .subscribe(function (movie) { return _this.movie = movie; });
    };
    return SingleMovieComponent;
}());
SingleMovieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-single-movie',
        template: __webpack_require__("../../../../../src/app/single-movie/single-movie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/single-movie/single-movie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], SingleMovieComponent);

var _a, _b;
//# sourceMappingURL=single-movie.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    BASEURL: 'https://swapi.co/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map