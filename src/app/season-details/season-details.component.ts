import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { SeasonCache } from '../season-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss']
})
export class SeasonDetailsComponent implements OnInit {

  spinner:boolean;
  seasonData:Array<SeasonCache> = [];
  seasonItem:SeasonCache;
  pageLoad:boolean;
  Title:string;

  constructor(private moviedataService:MoviedataService, private router:Router) { }

  ngOnInit(): void {
    this.spinner = true;
    this.Title = this.moviedataService.fullTitle;
    for(let i=0;i<this.moviedataService.totalSeasons;i++){
      this.seasonItem = {
        "SeasonNo": i,
        "Spinner": false
      }
      this.seasonData.push(this.seasonItem);
    }
    this.getSeasons(1);
  }

  getSeasons(seasonNo){
    if(!(this.seasonData[seasonNo-1].SeasonObject && this.seasonData[seasonNo-1].SeasonObject.Response=='True')){
      this.seasonData[seasonNo-1].Spinner = true;
      this.moviedataService.getSeason(this.moviedataService.imdb,seasonNo)
      .pipe(
      )
      .subscribe(
        next => {
          this.pageLoad = true;
          this.seasonData[seasonNo-1].SeasonObject = next;
          setTimeout(()=>{this.spinner=false;this.seasonData[seasonNo-1].Spinner =false},1000)
        },
        error=> { 
          this.seasonData[seasonNo-1].SeasonObject = {'Response':"False","Error":error.statusText};
          setTimeout(()=>{this.spinner=false;this.seasonData[seasonNo-1].Spinner =false},1000) 
        }
      )
    }
  }

  loadEpisode(seasonNo,EpisodeNo) {
    this.moviedataService.season = seasonNo;
    this.moviedataService.episode = EpisodeNo;
    this.router.navigateByUrl('/episodes');
  }

}
