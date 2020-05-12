import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  filmTitle:string;
  advSearchText:string;
  @Output() titleSubmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  search(){
    if(this.filmTitle){
      this.advSearchText="";
      this.titleSubmit.emit(this.filmTitle);
    }
  }

  advSearch(){
    this.advSearchText="Advanced Search Feature Coming SOON..!!!"
  }

}
