import { Component, Input, numberAttribute } from '@angular/core';
import { FormActorComponent } from "../form-actor/form-actor.component";
import { ActorUpdateDto } from './actor-update.dto';
import { ActorCreateDto } from '../create-actor/actor-create.dto';
import { provideNativeDateAdapter } from '@angular/material/core';
import moment from 'moment';

@Component({
  selector: 'app-edit-actor',
  imports: [FormActorComponent],
  providers: [provideNativeDateAdapter()],
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css'
})
export class EditActorComponent {

  @Input({ transform: numberAttribute})
  id!: number;

  model: ActorUpdateDto = {id: 1, name: 'Dennis Pineda', dateOfBirth: moment('1994-12-01').toDate()};

  saveChanges(model: ActorCreateDto) {
    console.log('Actor updated', model);
  }
}
