import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {

  @Input() details:Movie;
  panelOpenState:Boolean = false;

  
  constructor() { }

  ngOnInit(): void {
  }

}
