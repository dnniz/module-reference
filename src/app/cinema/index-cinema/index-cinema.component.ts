import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index-cinema',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './index-cinema.component.html',
  styleUrl: './index-cinema.component.css'
})
export class IndexCinemaComponent {

}
