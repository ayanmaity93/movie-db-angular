import { Component, OnInit, Input, OnChanges, Output, EventEmitter, Optional } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnChanges {
  @Input() searchTitle:string;
  @Input() searchType:string;
  @Output() setList = new EventEmitter();
  movieDetails:Movie;
  spinner:Boolean;

  constructor(@Optional() private moviedataservice:MoviedataService) { }

  ngOnChanges(changes){
    this.spinner=true;
    this.movieDetails=undefined;
    this.getMovieData();
  }

  getMovieData(){
    if(this.searchTitle){
      this.moviedataservice.getData(this.searchTitle,this.searchType)
      .pipe(
      )
      .subscribe(
        next=> {
          this.movieDetails = next;
          console.log("Next="+next);
          this.transformData();
          setTimeout(()=>{this.spinner=false;},1000)
          if(this.movieDetails.Error == "Movie not found!") {
            this.movieDetails = undefined;
            this.setList.emit()
          }
        },
        error=> { this.movieDetails = {'Response':"False","Error":error.statusText}; }
      )
    }
  }

  ngOnInit(): void {
  }

  transformData(){
    this.movieDetails.GenreArr = this.moviedataservice.transformData(this.movieDetails.Genre);
    this.movieDetails.WriterArr = this.moviedataservice.transformData(this.movieDetails.Writer);
    this.movieDetails.ActorsArr = this.moviedataservice.transformData(this.movieDetails.Actors);
  }

}
