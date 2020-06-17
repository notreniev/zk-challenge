import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('data') card: any = {};

  constructor() { 
    this.card.photo = 'assets/default-profile-image-woman.png'
  }

  ngOnInit(): void {
  }

}
