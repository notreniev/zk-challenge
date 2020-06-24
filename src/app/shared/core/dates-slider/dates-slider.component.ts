import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { faAngleLeft as left, faAngleRight as right } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dates-slider',
  templateUrl: './dates-slider.component.html',
  styleUrls: ['./dates-slider.component.css']
})
export class DatesSliderComponent implements OnInit {

  @Input() schedule: any;
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  left = left;
  right = right;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 155), behavior: 'smooth' });
  }

  constructor() { }

  setDate(date) {
    sessionStorage.setItem('date', JSON.stringify(date));
  }

  ngOnInit(): void {
  }

}
