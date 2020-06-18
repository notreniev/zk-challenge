import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/models/card.model';
import { Profile } from '../shared/models/profile.model';
import { Schedule } from '../shared/models/schedule.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile: Profile = {
    name: 'Professional name',
    subtitle: 'Psicologyst',
    location: 'Lisbon',
    reviews: 20,
    price: 160,
    time: 50,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi natus tempore quidem commodi illo quos, architecto, ex perferendis corrupti placeat impedit reprehenderit quo cupiditate sed. Modi, perspiciatis quod? Dicta, incidunt.',
    photo: 'assets/default-profile-image-woman.png'
  };

  schedule: Schedule = {
    header: 'Schedule your session',
    timezone: 'Lisbon (+1)'
  }
  
  cardProfile: Card = {
    content: this.profile
  };

  cardSchedule: Card = {
    header: 'Schedule yout session',
    content: this.schedule,
    footer: 'footer',
  };

  constructor() { 
  }

  ngOnInit(): void {
  }

}
