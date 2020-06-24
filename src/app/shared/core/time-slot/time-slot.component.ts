import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {

  @Input() schedule: any;
  @Input() id: any;
  
  constructor() { }

  setTime(time){
    sessionStorage.setItem('time', JSON.stringify(time));
  }

  ngOnInit(): void {
  }

}
