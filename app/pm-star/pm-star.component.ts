import { Component,OnChanges, Input, EventEmitter , OnInit, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './pm-star.component.html',
  styleUrls: ['./pm-star.component.css']
})
export class PmStarComponent implements OnChanges {

  @Input() rating : number;
  starWidth : number;
  
  @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void{
    this.starWidth = this.rating * 86 /5;
  }

  onClick() : void{
    this.ratingClicked .emit('the rating ${this.rating} was clicked');
  }

/*  constructor() { }

  ngOnInit() {
  }*/

}