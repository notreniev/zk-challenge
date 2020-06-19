import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Card } from '../shared/models/card.model';
import { Profile } from '../shared/models/profile.model';
import { Schedule } from '../shared/models/schedule.model';

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
    ]
  };

  cardProfile: Card = {
    content: this.profile,
  };

  cardSchedule: Card = {
    header: 'Schedule your session',
    content: this.schedule,
  };

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {}
}
