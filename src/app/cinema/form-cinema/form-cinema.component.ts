import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormContainerComponent } from '../../shared/components/form-container/form-container.component';
import { CinemaPostDto } from '../create-cinema/cinema-post.dto';
import { CinemaDto } from '../edit-cinema/cinema.dto';
import { MapComponent } from "../../shared/components/map/map.component";
import { Coordinate } from '../../shared/components/map/coordinate';
const { required, pattern } = Validators;
@Component({
  selector: 'app-form-cinema',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatCardModule, FormContainerComponent, MapComponent],
  templateUrl: './form-cinema.component.html',
  styleUrl: './form-cinema.component.css'
})
export class FormCinemaComponent implements OnInit{
  ngOnInit(): void {
    if(this.model){
      this.form.patchValue(this.model)
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude})
    }
  }

  @Input()
  model?: CinemaDto;

  @Input({required: true})
  headerlabel!: string;

  @Output()
  postForm = new EventEmitter<CinemaPostDto>();

  @Output()
  cancelForm = new EventEmitter<void>();

  initialCoordinates: Coordinate[] = []

  private formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
    name: ['', { validator: [required]}],
    latitude: new FormControl<number | null>(null, [required]),
    longitude: new FormControl<number | null>(null, [required]),
  })

  onSelectedCoordinate(coordinate: Coordinate){
    this.form.patchValue(coordinate);
  }

  printErrorMessage(){
    const { name } = this.form.controls;

    if(name.hasError('required') && name.touched)
    {
      return 'Name is required'
    }

    else return ''
  }
  saveChanges() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const cinema = this.form.value as CinemaPostDto;

    this.postForm.emit(cinema);
  }

  cancel() {
    // this.router.navigate(['/cinema']);
    this.cancelForm.emit();
  }
}
