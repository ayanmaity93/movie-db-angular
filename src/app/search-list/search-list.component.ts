import { Component, OnInit, Input, Output, EventEmitter, OnChanges, Optional, HostListener } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { MovieList } from '../movie-list';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  pageNo:number;
  @HostListener('window:scroll') onScroll(){
    if(window.innerHeight+window.scrollY >= document.documentElement.scrollHeight-10){
      if(this.paginationLength > this.pageNo && this.movieList.Response=='True'){
        this.getPageList(this.pageNo+1)
      }
    }
  }

  constructor(@Optional() private moviedataService:MoviedataService, private snackbar:MatSnackBar) { }

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
        next=> {this.movieList = next;this.pageNo = 1;setTimeout(()=>{this.setPaginator();this.spinner=false;},1000)},
        error=> { this.movieList = {'Response':"False","Error":error.statusText}; }
      )
    }
  }

  setPaginator(){
    this.paginationLength = (this.movieList.totalResults && parseInt(this.movieList.totalResults)%10!==0)? (parseInt(this.movieList.totalResults)/10)+1:(parseInt(this.movieList.totalResults)/10);
  }

  getPageList(pageNo) {
    this.spinner = true;
    this.moviedataService.getList(this.moviedataService.title,this.moviedataService.type,this.moviedataService.year,pageNo)
    .pipe(
    )
    .subscribe(
      next=> {
        if(next.Response=="True"){
          this.movieList.Search = this.movieList.Search.concat(next.Search);
          this.pageNo++;
        } else {
          this.snackbar.open(next.Error,'',{duration:2000});
        }
        setTimeout(()=>{this.spinner=false;},1000)
      },
      error=> { 
        this.snackbar.open(error.statusText,'',{duration:2000});
        setTimeout(()=>{this.spinner=false;},1000)
      }
    )
  }

}
