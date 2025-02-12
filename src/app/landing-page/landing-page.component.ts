import { Component, OnInit } from '@angular/core';
import { RatingComponent } from "../shared/components/rating/rating.component";
import { ListMovieComponent } from '../movies/list-movie/list-movie.component';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [DatePipe, UpperCasePipe, RatingComponent, ListMovieComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent  implements OnInit {

  ngOnInit(): void {
    setTimeout(() => {

      this.arrMoviesOnCartelera = [
        {
          title: 'Princess Mononoke',
          year: 1997,
          rating: 8.4,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/8/8c/Princess_Mononoke_Japanese_poster.png/220px-Princess_Mononoke_Japanese_poster.png'
        },
        {
          title: 'Castle in the Sky',
          year: 1986,
          rating: 8.0,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/f/f5/Castle_in_the_Sky_%281986%29.png/220px-Castle_in_the_Sky_%281986%29.png'
        },
        {
          title: 'Porco Rosso',
          year: 1992,
          rating: 7.7,
          url: '//upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg'
        },
        {
          title: 'Spirited Away',
          year: 2001,
          rating: 8.6,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/d/db/Spirited_Away_Japanese_poster.png/220px-Spirited_Away_Japanese_poster.png'
        },
        {
          title: 'Ponyo',
          year: 2008,
          rating: 7.7,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/5/51/Ponyo.png/220px-Ponyo.png'
        },
        {
          title: 'The Boy and the Heron',
          year: 2023,
          rating: 7.4,
          url: '//upload.wikimedia.org/wikipedia/en/4/41/How_Do_You_Live_poster.jpg'
        },
        {
          title: 'My Neighbor Totoro',
          year: 1988,
          rating: 8.2,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg/220px-My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg'
        }
      ];


      this.arrMoviesNextReleases = [
        {
          title: "Kiki's Delivery Service",
          year: 1989,
          rating: 7.8,
          url: '//upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg'
        },
        {
          title: "Castle in the Sky",
          year: 1986,
          rating: 8.0,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/f/f5/Castle_in_the_Sky_%281986%29.png/220px-Castle_in_the_Sky_%281986%29.png'
        },
        {
          title: "Porco Rosso",
          year: 1992,
          rating: 7.7,
          url: '//upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg'
        }
      ];

    }, 500);
  }
  title = 'My App Reference';
  date = new Date();
  arrMoviesOnCartelera: any[] = [];
  arrMoviesNextReleases: any[] = [];


  processRating(rating: number): void {
    alert(`Rating: ${rating}`);
  }
}
