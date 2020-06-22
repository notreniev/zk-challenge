import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faAngleLeft as left, faAngleRight as right } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  faAngleDoubleLeft = left;
  faAngleDoubleRight = right;

  @Input() schedule: any;
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  appointments = [];
  appointment = {};

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 155), behavior: 'smooth' });
  }

  setDate(date) {
    sessionStorage.setItem('date', JSON.stringify(date));
  }

  setTime(time){
    sessionStorage.setItem('time', JSON.stringify(time));
    this.storeData(time);
  }

  storeData(data){
    const sdate = sessionStorage.getItem('date');
    const stime = sessionStorage.getItem('time');
    this.appointment = {
      date: sdate,
      time: stime
    };
    this.appointments.push(this.appointment);
    // sessionStorage.removeItem('date');
    // sessionStorage.removeItem('time');
    console.log(this.appointments);
  }

  constructor() {
  }


  ngOnInit(): void {
  }

}
