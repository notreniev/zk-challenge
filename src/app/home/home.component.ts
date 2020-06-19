import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/core/models/card.model';
import { Profile } from '../shared/core/models/profile.model';
import { Schedule } from '../shared/core/models/schedule.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  profile: Profile = {
    name: 'Professional name',
    subtitle: 'Psicologyst',
    location: 'Lisbon',
    reviews: 20,
    price: 160,
    time: 50,
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi natus tempore quidem commodi illo quos, architecto, ex perferendis corrupti placeat impedit reprehenderit quo cupiditate sed. Modi, perspiciatis quod? Dicta, incidunt.',
    photo: 'assets/default-profile-image-woman.png',
  };

  schedule: Schedule = {
    header: 'Schedule your session',
    timezone: 'Lisbon (+1)',
    dates: [
      { weekday: 'mon', day: 'AUG 19' },
      { weekday: 'tue', day: 'AUG 20' },
      { weekday: 'wed', day: 'AUG 21' },
      { weekday: 'thu', day: 'AUG 22' },
      { weekday: 'fri', day: 'AUG 23' },
      { weekday: 'mon', day: 'AUG 24' },
      { weekday: 'tue', day: 'AUG 25' },
      { weekday: 'wed', day: 'AUG 26' },
      { weekday: 'thu', day: 'AUG 27' }
    ],
    slots: [
      { time: '-' }, { time: '08:00' }, { time: '08:00' }, { time: '08:00' },
      { time: '-' }, { time: '08:30' }, { time: '08:30' }, { time: '08:30' },
      { time: '-' }, { time: '09:00' }, { time: '09:00' }, { time: '09:00' },
      { time: '-' }, { time: '09:30' }, { time: '09:30' }, { time: '09:30' },
      { time: '-' }, { time: '10:00' }, { time: '10:00' }, { time: '10:00' },
      { time: '-' }, { time: '10:30' }, { time: '10:30' }, { time: '10:30' },
      { time: '-' }, { time: '10:00' }, { time: '10:00' }, { time: '10:00' },
      { time: '-' }, { time: '10:00' }, { time: '10:00' }, { time: '10:00' },
      { time: '-' }, { time: '10:00' }, { time: '10:00' }, { time: '10:00' },
      { time: '-' }, { time: '10:00' }, { time: '10:00' }, { time: '10:00' },
      { time: '-' }, { time: '10:00' }, { time: '10:00' }, { time: '10:00' },
      { time: '-' }, { time: '10:00' }, { time: '10:00' }, { time: '10:00' },
      { time: '-' }, { time: '10:00' }, { time: '10:00' }, { time: '10:00' },
      { time: '-' }, { time: 'MORE' }, { time: 'MORE' }, { time: 'MORE' }
    ]
  };

  cardProfile: Card = {
    content: this.profile,
  };

  cardSchedule: Card = {
    header: 'Schedule your session',
    content: this.schedule,
  };



  constructor() {
  }

  ngOnInit(): void { }
}
