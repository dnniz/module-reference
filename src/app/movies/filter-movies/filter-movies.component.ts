import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListMovieComponent } from "../list-movie/list-movie.component";
import { queryParamFilter } from './query-param-filter.dto';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-movies',
  imports: [MatButtonModule, MatFormFieldModule,
    ReactiveFormsModule, MatInputModule,
    MatCardModule, MatSelectModule, MatCheckboxModule, ListMovieComponent],
  templateUrl: './filter-movies.component.html',
  styleUrl: './filter-movies.component.css'
})
export class FilterMoviesComponent implements OnInit{

  ngOnInit(): void {
    this.readUrlValues();

    this.form.valueChanges.subscribe( values =>{
      // this.movies = this.moviesDB;

      // console.log("VALUES: ", values);
      this.writeQueryParams(values as queryParamFilter);
      this.filterMovies(values as queryParamFilter);
    })

  }

  private formBuilder = inject(FormBuilder);
  private location = inject(Location);
  private activartedRoute = inject(ActivatedRoute);

  form = this.formBuilder.group({
    title: '',
    genreid: 0,
    nextpremiere: false,
    incinema: false
  });

  genres = [
    {id: 1, name: 'Drama'},
    {id: 2, name: 'Action'},
    {id: 3, name: 'Comedy'}
  ]

  moviesDB = [
    {
      title: 'Princess Mononoke',
      year: 1997,
      rating: 8.4,
      url: '//upload.wikimedia.org/wikipedia/en/thumb/8/8c/Princess_Mononoke_Japanese_poster.png/220px-Princess_Mononoke_Japanese_poster.png',
      genre: [1, 2],
      nextpremiere: false,
      incinema: true
    },
    {
      title: 'Castle in the Sky',
      year: 1986,
      rating: 8.0,
      url: '//upload.wikimedia.org/wikipedia/en/thumb/f/f5/Castle_in_the_Sky_%281986%29.png/220px-Castle_in_the_Sky_%281986%29.png',
      genre: [2, 3],
      nextpremiere: true,
      incinema: false
    },
    {
      title: 'Porco Rosso',
      year: 1992,
      rating: 7.7,
      url: '//upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg',
      genre: [1, 3],
      nextpremiere: false,
      incinema: true
    },
    {
      title: 'Spirited Away',
      year: 2001,
      rating: 8.6,
      url: '//upload.wikimedia.org/wikipedia/en/thumb/d/db/Spirited_Away_Japanese_poster.png/220px-Spirited_Away_Japanese_poster.png',
      genre: [1, 2, 3],
      nextpremiere: true,
      incinema: false
    },
    {
      title: 'Ponyo',
      year: 2008,
      rating: 7.7,
      url: '//upload.wikimedia.org/wikipedia/en/thumb/5/51/Ponyo.png/220px-Ponyo.png',
      genre: [2],
      nextpremiere: false,
      incinema: true
    },
    {
      title: 'The Boy and the Heron',
      year: 2023,
      rating: 7.4,
      url: '//upload.wikimedia.org/wikipedia/en/4/41/How_Do_You_Live_poster.jpg',
      genre: [3],
      nextpremiere: true,
      incinema: false
    },
    {
      title: 'My Neighbor Totoro',
      year: 1988,
      rating: 8.2,
      url: '//upload.wikimedia.org/wikipedia/en/thumb/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg/220px-My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg',
      genre: [1],
      nextpremiere: false,
      incinema: true
    },
    {
      title: "Kiki's Delivery Service",
      year: 1989,
      rating: 7.8,
      url: '//upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg',
      genre: [2, 3],
      nextpremiere: true,
      incinema: false
    },
  ];

  movies = this.moviesDB;


  filterMovies(filter: queryParamFilter){

    let filterdMovies : any[] = [];
    this.moviesDB.forEach( movie => {

      const { genreid, incinema, nextpremiere , title } = filter;
      let admited = false;

        if(genreid != 0)
          if(movie.genre.includes(genreid))
            admited = true;
          else return;

        if(incinema)
          if(movie.incinema == Boolean(incinema))
            admited = true;
          else return;

        if(nextpremiere)
          if(movie.nextpremiere == Boolean(nextpremiere))
            admited = true;
          else return;

        if(title){
          let titleToLower = movie.title.toLowerCase();
          let filterTitle = title.toLowerCase();
          if((titleToLower.indexOf(filterTitle)) != -1)
            admited=true;
          else return;
        }

        if(admited && !filterdMovies.some(filterdMovie => filterdMovie.title == movie.title) )
          filterdMovies.push(movie);
        else{
          let index = this.movies.findIndex(x=> movie.title);
          this.movies.slice(index, 1);
        }

    })

    this.movies = filterdMovies;
  }

  writeQueryParams(values: queryParamFilter){
    let queryStrings = [];

    const { genreid, incinema, title, nextpremiere} = values;

    if(genreid != 0)
      queryStrings.push(`genreid=${encodeURIComponent(genreid)}`)

    if(incinema)
      queryStrings.push(`incinema=${encodeURIComponent(incinema)}`)

    if(nextpremiere)
      queryStrings.push(`nextpremiere=${encodeURIComponent(nextpremiere)}`)

    if(title)
      queryStrings.push(`title=${encodeURIComponent(title)}`)

    this.location.replaceState('movies/filter', queryStrings.join('&'))
  }

  readUrlValues(){
    let countActiveFilters = 0;
    this.activartedRoute.queryParams.subscribe((params: any)=>{
      var filter: queryParamFilter = {
        genreid:  0,
        incinema: null,
        title: null,
        nextpremiere: null
      };
      const { genreid, incinema, title, nextpremiere} = params;

      if(genreid){
        filter.genreid = Number(genreid);
        countActiveFilters += 1;
      }

      if(incinema){
        filter.incinema = Boolean(incinema);
        countActiveFilters += 1;
    }

      if(nextpremiere){
        filter.nextpremiere = Boolean(nextpremiere);
        countActiveFilters += 1;
    }

      if(title){
        filter.title = title;
        countActiveFilters += 1;
    }

      this.form.patchValue(filter);
    })


    if(countActiveFilters > 0)
      this.filterMovies(this.form.value as queryParamFilter);
  }

  onSubmit() {
    // console.log('WORKS HERE : onSubmit() : form-container.component.ts');

    // this.submitForm.emit();
  }

  onClean() {
    this.form.patchValue({genreid: 0, incinema: null, nextpremiere: null, title: null});
    this.movies = this.moviesDB;
  }
}
