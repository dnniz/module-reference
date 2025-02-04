import { Component, EventEmitter, inject, Input, OnInit, Output,  } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-date-picker',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
})
export class DatePickerComponent implements OnInit {

  ngOnInit(): void {
    if (this.dateOfBirthValue) {
      this.form.controls.dateOfBirth.setValue(this.dateOfBirthValue);
    }
  }

  constructor() {
    this.form.controls.dateOfBirth.valueChanges.subscribe((dateOfBirth) => {
      this.dateOfBirth.emit(dateOfBirth);
    });
  }

  @Input({required: true})
  label: string = '';

  @Input()
  dateOfBirthValue!: Date|undefined;

  @Output()
  dateOfBirth = new EventEmitter<Date|null>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    dateOfBirth: new FormControl<Date|null>(null),
  });
}
