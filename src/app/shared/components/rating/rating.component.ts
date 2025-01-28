import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIcon, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {

  ngOnInit(): void {
    this.ratingPrinted = Array(this.maxRating);
  }

  @Input({required: true})
  maxRating!: number;

  @Output()
  ratingSeleted = new EventEmitter<number>();

  ratingPrinted: number[] = [];

  previusRating: number = 0;

  handlerMouseEnter(index: number): void {
    this.maxRating = index + 1;
  }

  handlerMouseLeave(): void {
    this.maxRating = this.previusRating;
  }

  handlerClick(index: number): void {
    this.previusRating = this.maxRating;
    this.maxRating = index + 1;
    this.ratingSeleted.emit(this.maxRating);
  }
}
