import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faAngleLeft as left, faAngleRight as right, faTrashAlt as rem } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  faAngleDoubleLeft = left;
  faAngleDoubleRight = right;
  remove = rem;

  @Input() schedule: any;
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  appointmentsList = [];
  appointment;

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
  }

  add(){
    this.appointment = {};
    this.appointment.date = JSON.parse(sessionStorage.getItem('date'));
    this.appointment.time = JSON.parse(sessionStorage.getItem('time'));
    this.appointment.id = Number(new Date());

    this.appointmentsList.push(this.appointment);
    console.log('appointmentList', this.appointmentsList);

    sessionStorage.removeItem('date');
    sessionStorage.removeItem('time');
  }

  rm(id){
    console.log(id);
    const index = this.appointmentsList.indexOf(id);
    this.appointmentsList.splice(index, 1);
  }

  constructor() {
  }


  ngOnInit(): void {
  }

}
