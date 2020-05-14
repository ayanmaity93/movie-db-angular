import { Component, OnInit } from '@angular/core';
import { MoviedataService  } from '../moviedata.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {

  searchTitle:string;
  constructor(private moviedataService:MoviedataService) { }

  ngOnInit(): void {
    this.searchTitle = this.moviedataService.imdb;
    this.moviedataService.key = 'episode';
  }

}
