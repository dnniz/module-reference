import { Component, Input, numberAttribute } from '@angular/core';
import { FormActorComponent } from "../form-actor/form-actor.component";
import { ActorDto } from './actor.dto';
import { ActorPostDto } from '../create-actor/actor-post.dto';
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

  model: ActorDto = {id: 1, name: 'Dennis Pineda', dateOfBirth: moment('1994-12-01').toDate(), imageUrl: 'https://media.revistagq.com/photos/5ca601837a3aecd7de49781d/master/w_1280,c_limit/mr_robot_serie_8793.gif'};

  saveChanges(model: ActorPostDto) {
    console.log('Actor updated', model);
  }

  cancel() {
    console.log('Cancelled');
  }
}
