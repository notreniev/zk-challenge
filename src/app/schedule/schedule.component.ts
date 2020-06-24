import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faAngleLeft as left, faAngleRight as right, faTrashAlt as rem } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  left = left;
  right = right;
  remove = rem;
  alert: any = {};

  @Input() schedule: any;

  appointmentsList = [];
  appointment;

  setTime(time){
    sessionStorage.setItem('time', JSON.stringify(time));
  }

  add(){
    const sdate = JSON.parse(sessionStorage.getItem('date'));
    const stime = JSON.parse(sessionStorage.getItem('time'));

    if (!sdate) {
      this.alert.danger = 'You need do select a date';
      this.cleanUpMessages();
      return;
    }

    if (!stime) {
      this.alert.danger = 'You need to select a time';
      this.cleanUpMessages();
      return;
    }

    this.appointment = {};
    this.appointment.date = sdate;
    this.appointment.time = stime;
    this.appointment.id = Number(new Date());

    this.appointmentsList.push(this.appointment);

    sessionStorage.removeItem('date');
    sessionStorage.removeItem('time');

    this.alert.success = 'Schedule saved successfully';

    this.cleanUpMessages();
  }

  rm(id){
    const index = this.appointmentsList.indexOf(id);
    this.appointmentsList.splice(index, 1);
    this.alert.success = 'Schedule removed successfully';

    this.cleanUpMessages();
  }

  cleanUpMessages = () => {
    setTimeout(() => {
      this.alert.success = '';
      this.alert.danger = '';
    }, 3000);
  }

  constructor() {
  }


  ngOnInit(): void {
  }

}
