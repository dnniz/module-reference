import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActorUpdateDto } from '../edit-actor/actor-update.dto';
import { ActorCreateDto } from '../create-actor/actor-create.dto';
import { DatePickerComponent } from "../../shared/date-picker/date-picker.component";
import moment from 'moment';
import { FormContainerComponent } from "../../shared/components/form-container/form-container.component";

const { required, pattern } = Validators;

@Component({
  selector: 'app-form-actor',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatCardModule, DatePickerComponent, FormContainerComponent],
  templateUrl: './form-actor.component.html',
  styleUrl: './form-actor.component.css',
})
export class FormActorComponent implements OnInit{
  ngOnInit(): void {
    if (this.model) {
      this.form.patchValue(this.model);
    }
  }

  @Input()
  model?: ActorUpdateDto;

  @Input({ required: true })
  headerlabel!: string;

  @Output()
  postForm = new EventEmitter<ActorCreateDto>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [required, pattern("[a-zA-Z ]*")]}],
    dateOfBirth: [null as Date | null, { validators: [required]}],
  });

  onDateOfBirthChange(date: Date | null) {
    this.form.controls['dateOfBirth'].setValue(date);
  }

  printErrorMessage() {
    const { name, dateOfBirth } = this.form.controls;

    if (name.hasError('required') && name.touched) {
      return 'Name is required';
    }

    if (name.hasError('pattern')) {
      return 'Name must contain only letters';
    }

    if (dateOfBirth.hasError('required') && dateOfBirth.touched) {
      return 'Date of birth is required';
    }

    if (dateOfBirth.hasError('pattern')) {
      return 'Date of birth must be in the format yyyy-mm-dd';
    }

    return '';
  }

  saveChanges() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const actor = this.form.value as ActorCreateDto;
    actor.dateOfBirth = moment(actor.dateOfBirth).toDate();
    console.log("Save: ", actor);
    this.postForm.emit(actor);
  }

  cancel() {
    // this.router.navigate(['/actors']);

  }
}
