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

  time = [
    { time: '08:00' }, { time: '08:30' }, { time: '09:00' }, { time: '09:30' },
    { time: '10:00' }, { time: '10:30' }, { time: '11:00' }, { time: '11:30' },
    { time: '12:00' }, { time: '12:30' }, { time: '13:00' }, { time: '13:30' },
    { time: '14:00' }, { time: '14:30' }, { time: '15:00' }, { time: '15:30' },
    { time: '16:00' }, { time: '16:30' }, { time: '17:00' }, { time: '17:30' },
    { time: '18:00' }, { time: '18:30' }, { time: '19:00' }, { time: '19:30' },
    { time: '20:00' }, { time: '20:30' }, { time: '21:00' }, { time: '21:30' }
  ];

  datas = [
    { weekday: 'mon', day: 'AUG 19', slots: this.time },
    { weekday: 'tue', day: 'AUG 20', slots: this.time },
    { weekday: 'wed', day: 'AUG 21', slots: this.time },
    { weekday: 'thu', day: 'AUG 22', slots: this.time },
    { weekday: 'fri', day: 'AUG 23', slots: this.time },
    { weekday: 'mon', day: 'AUG 24', slots: this.time },
    { weekday: 'tue', day: 'AUG 25', slots: this.time },
    { weekday: 'wed', day: 'AUG 26', slots: this.time },
    { weekday: 'thu', day: 'AUG 27', slots: this.time },
    { weekday: 'thu', day: 'AUG 28', slots: this.time },
    { weekday: 'thu', day: 'AUG 29', slots: this.time },
    { weekday: 'thu', day: 'AUG 30', slots: this.time }
  ];

  schedule: Schedule = {
    header: 'Schedule your session',
    timezone: 'Lisbon (+1)',
    dates: this.datas,
    slots: this.time
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
