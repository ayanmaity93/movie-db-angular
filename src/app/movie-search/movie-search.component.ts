import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  filmTitle:String;
  @Output() titleSubmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  search(){
    if(this.filmTitle){
      this.titleSubmit.emit(this.filmTitle);
    }
  }

}
