import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Card } from '../shared/core/models/card.model';
import { Content } from '../shared/core/models/content.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  cardProfile: Card = {content: ''};
  cardSchedule: Card = {content: ''};

  constructor(public service: DataService) {
  }

  ngOnInit(): void {
    this.getProfile();
    this.getSchedule();
  }

  getProfile = async () => {
    await this.service.getProfile().then((response) => {
      const content: Content = response;
      this.cardProfile.content = content;
    });
  }

  getSchedule = async () => {
    await this.service.getSchedule().then(response => {
      const content: Content = response;

      this.cardSchedule.content = content;
      this.cardSchedule.header = 'Schedule your session';
      this.cardSchedule.subheader = 'Lisbon(+1)';
    });
  }

}
