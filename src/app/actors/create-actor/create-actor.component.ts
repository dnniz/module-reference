import { Component } from '@angular/core';
import { FormActorComponent } from "../form-actor/form-actor.component";
import { ActorPostDto } from './actor-post.dto';

@Component({
  selector: 'app-create-actor',
  imports: [FormActorComponent],
  templateUrl: './create-actor.component.html',
  styleUrl: './create-actor.component.css'
})
export class CreateActorComponent {

  saveChanges(actor: ActorPostDto) {
    console.log('Actor created', actor);
  }

  cancel() {
    console.log('Cancelled');
  }
}
