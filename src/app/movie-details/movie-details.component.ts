import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { Movie } from '../movie';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnChanges {
  @Input() searchTitle:String;
  movieDetails:Movie;

  constructor(private moviedataservice:MoviedataService) { }

  ngOnChanges(changes){
    this.getMovieData(changes.searchTitle.currentValue);
  }

  getMovieData(title){
    if(this.searchTitle){
      this.moviedataservice.getData(title)
      .pipe(
      )
      .subscribe(
        next=> {this.movieDetails = next;console.log("Next="+next);this.transformData();},
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
