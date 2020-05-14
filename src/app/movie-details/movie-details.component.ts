import { Component, OnInit, Input, OnChanges, Output, EventEmitter, Optional } from '@angular/core';
import { Location } from '@angular/common';
import { MoviedataService } from '../moviedata.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnChanges {
  @Input() searchTitle:string;
  @Output() setList = new EventEmitter();
  @Output() showSeasons = new EventEmitter();
  title:string;
  movieDetails:Movie;
  spinner:Boolean;
  key:string;
  fullTitle:string;
  episode:string;
  season:string;

  constructor(@Optional() private moviedataservice:MoviedataService, public location:Location) { }

  ngOnChanges(){
    this.spinner=true;
    this.movieDetails=undefined;
    this.key = this.moviedataservice.key;
    this.fullTitle = this.moviedataservice.fullTitle;
    this.episode = this.moviedataservice.episode;
    this.season = this.moviedataservice.season;
    this.getMovieData();
  }

  getMovieData(){
    if(this.moviedataservice.key !== "episode"){
      this.title = (this.moviedataservice.key=='imdb')? this.moviedataservice.imdb : this.moviedataservice.title;
      this.moviedataservice.getData(this.title,this.moviedataservice.key)
      .pipe(
      )
      .subscribe(
        next=> {
          this.movieDetails = next;
          console.log("Next="+next);
          this.transformData();
          setTimeout(
            ()=>{
              this.spinner=false;
              if(this.movieDetails.Error == "Movie not found!") {
                this.movieDetails = undefined;
                this.setList.emit()
              }
            },1000
          )
        },
        error=> { this.movieDetails = {'Response':"False","Error":error.statusText}; setTimeout(()=>{this.spinner=false;},1000)}
      )
    } else {
      this.moviedataservice.getEpisode(this.moviedataservice.imdb,this.moviedataservice.season,this.moviedataservice.episode)
      .pipe(
      )
      .subscribe(
        next=> {
          this.movieDetails = next;
          console.log("Next="+next);
          this.transformData();
          setTimeout(
            ()=>{
              this.spinner=false;
            },1000
          )
        },
        error=> { this.movieDetails = {'Response':"False","Error":error.statusText}; setTimeout(()=>{this.spinner=false;},1000)}
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

  loadSeasons(){
    this.moviedataservice.totalSeasons = parseInt(this.movieDetails.totalSeasons); 
    this.moviedataservice.fullTitle = this.movieDetails.Title;
    this.showSeasons.emit(this.movieDetails.imdbID);
  }

}
