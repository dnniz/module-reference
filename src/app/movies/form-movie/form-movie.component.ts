import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormContainerComponent } from "../../shared/components/form-container/form-container.component";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieDto } from '../DTOs/Movie.dto';
import { MoviePostDto } from '../DTOs/movie-post.dto';
import moment from 'moment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePickerComponent } from "../../shared/date-picker/date-picker.component";
import { InputImgComponent } from "../../shared/components/input-img/input-img.component";
import { MatInputModule } from '@angular/material/input';
const { required, pattern } = Validators;

@Component({
  selector: 'app-form-movie',
  imports: [
    //Reactive Components Dependency:
    ReactiveFormsModule,
    //Angular Material:
    MatFormFieldModule,
    MatInputModule,
    //Shared Components:
    FormContainerComponent,
    DatePickerComponent,
    InputImgComponent
],
  templateUrl: './form-movie.component.html',
  styleUrl: './form-movie.component.css'
})
export class FormMovieComponent implements OnInit{
    ngOnInit(): void {
      if(this.model)
        this.form.patchValue(this.model);
    }



    //Model
    @Input()
    model?: MovieDto;

    //Inputs & Oputs
    @Input({ required: true })
    headerlabel!: string;

    @Output()
    postForm = new EventEmitter<MoviePostDto>();

    @Output()
    cancelForm = new EventEmitter<void>();

    //Build Components
    private formBuilder = inject(FormBuilder);
    form = this.formBuilder.group({
          title: ['', { validators: [required]}],
          releaseDate: new FormControl<Date | null>(null, { validators: [required]}),
          trailerVideoUrl: '',
          poster: new FormControl<File | null>(null)
        });

    //Trigger Functions
    onReleaseDateChange(date: Date | null) {
      this.form.controls['releaseDate'].setValue(date);
    }
    onImageSelected(file: File): void {
      this.form.controls['poster'].setValue(file);
    }

    //Functions
    saveChanges() {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }

      const movie = this.form.value as MoviePostDto;
      movie.releaseDate = moment(movie.releaseDate).toDate();


      this.postForm.emit(movie);
    }

    cancel() {
      this.cancelForm.emit();
    }

    //Validations
    printErrorMessage() {
      const { title, releaseDate } = this.form.controls;

      if (title.hasError('required') && title.touched) {
        return 'title is required';
      }

      if (releaseDate.hasError('required') && releaseDate.touched) {
        return 'Date of birth is required';
      }

      if (releaseDate.hasError('pattern')) {
        return 'Release Date must be in the format yyyy-mm-dd';
      }

      return '';
    }
}
