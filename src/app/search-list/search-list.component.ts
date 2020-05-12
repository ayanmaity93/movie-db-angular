import { Component, OnInit, Input, Output, EventEmitter, OnChanges, Optional } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { MovieList } from '../movie-list';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit, OnChanges {

  @Input('searchTitle') title:string;
  @Output() onSearchSelect = new EventEmitter();
  spinner:Boolean;
  movieList: MovieList;

  constructor(@Optional() private moviedataService:MoviedataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.spinner = true;
    this.movieList = undefined;
    this.getList()
  }

  getList(){
    if(this.title){
      this.moviedataService.getList(this.title)
      .pipe(
      )
      .subscribe(
        next=> {this.movieList = next;console.log("Next="+next);setTimeout(()=>{this.spinner=false;},1000)},
        error=> { this.movieList = {'Response':"False","Error":error.statusText}; }
      )
    }
  }

}
