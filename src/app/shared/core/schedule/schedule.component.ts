import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @Input('content') schedule: any;

  constructor() { }

  ngOnInit(): void {
  }

}
