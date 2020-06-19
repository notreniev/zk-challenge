import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  @Input('content') schedule: any;

  constructor() { }

  ngOnInit(): void {
  }

}
