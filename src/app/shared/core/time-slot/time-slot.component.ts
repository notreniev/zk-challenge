import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Schedule } from '../models/schedule.model';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {

  @Input() schedule: Schedule;
  @Input() id: Number;

  setTime(time){
    sessionStorage.setItem('time', JSON.stringify(time));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
