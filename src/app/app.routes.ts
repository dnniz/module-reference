import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndexGenresComponent } from './movie-genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './movie-genres/create-genre/create-genre.component';
import { IndexCinemaComponent } from './cinema/index-cinema/index-cinema.component';
import { CreateCinemaComponent } from './cinema/create-cinema/create-cinema.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditGenreComponent } from './movie-genres/edit-genre/edit-genre.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditCinemaComponent } from './cinema/edit-cinema/edit-cinema.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { FilterMoviesComponent } from './movies/filter-movies/filter-movies.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},

    // Genres Routes
    {path: 'genres', component: IndexGenresComponent},
    {path: 'genres/create', component: CreateGenreComponent},
    {path: 'genres/edit/:id', component: EditGenreComponent},

    // Cinema Routes
    {path: 'cinema', component: IndexCinemaComponent},
    {path: 'cinema/create', component: CreateCinemaComponent},
    {path: 'cinema/edit/:id', component: EditCinemaComponent},

    // Movies Routes
    {path: 'movies/create', component: CreateMovieComponent},
    {path: 'movies/edit/:id', component: EditMovieComponent},
    {path: 'movies/filter', component: FilterMoviesComponent},

    // Actors Routes
    {path: 'actors', component: IndexActorsComponent},
    {path: 'actors/create', component: CreateActorComponent},
    {path: 'actors/edit/:id', component: EditActorComponent},

    // Redirect to landing page if no route is found
    {path: '**', redirectTo: ''},

];
