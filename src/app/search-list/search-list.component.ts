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
  paginationLength:number;

  constructor(@Optional() private moviedataService:MoviedataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.spinner = true;
    this.movieList = undefined;
    this.getList()
  }

  getList(){
    if(this.moviedataService.title){
      this.moviedataService.getList(this.moviedataService.title,this.moviedataService.type,this.moviedataService.year)
      .pipe(
      )
      .subscribe(
        next=> {this.movieList = next;setTimeout(()=>{this.setPaginator();this.spinner=false;},1000)},
        error=> { this.movieList = {'Response':"False","Error":error.statusText}; }
      )
    }
  }

  setPaginator(){
    // this.paginationLength = (this.movieList.totalResults && parseInt(this.movieList.totalResults)%10!==0)? (parseInt(this.movieList.totalResults)/10)+1:(parseInt(this.movieList.totalResults)/10);
    this.paginationLength = (this.movieList.totalResults)? (parseInt(this.movieList.totalResults)):undefined;
  }

  getPageList(e) {
    this.spinner = true;
    this.movieList = undefined;
    this.moviedataService.getList(this.moviedataService.title,this.moviedataService.type,this.moviedataService.year,e.pageIndex+1)
    .pipe(
    )
    .subscribe(
      next=> {this.movieList = next;setTimeout(()=>{this.spinner=false;},1000)},
      error=> { this.movieList = {'Response':"False","Error":error.statusText}; setTimeout(()=>{this.setPaginator();this.spinner=false;},1000)}
    )
  }

}
