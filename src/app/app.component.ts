import { Component, OnInit, Optional } from '@angular/core';
import { MoviedataService } from './moviedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MOVIE DB';
  searchTitle:string;
  searchYear:number;
  searchType:string;
  searchFormText:string;
  isSearchList:boolean = false;
  isDarkTheme:boolean = false;
  showDetails:boolean = true;

  body:HTMLElement = document.getElementById("main-body");

  constructor(@Optional() private moviedataSevice: MoviedataService, private router:Router){}

  getDetails(e,type){
    this.showDetails = true;
    if(type==='imdb'){
      //this.searchFormText = this.moviedataSevice.title;
      this.moviedataSevice.imdb=e;
      this.searchTitle = e;
    } else {
      //this.searchFormText = e;
      this.moviedataSevice.title=e.title;
      this.moviedataSevice.year=e.year;
      this.moviedataSevice.type=e.type;
      this.searchTitle = e.title;
      this.searchYear = e.year;
      this.searchType = e.type;
    }
    //this.moviedataSevice.title=e;
    this.moviedataSevice.key=type;
    this.isSearchList = false;
    if(this.router.url !== '/'){
      this.router.navigateByUrl('/');
    }
  }

  searchForList(){
    //this.moviedataSevice.title = this.searchFormText;
    //this.searchTitle = this.searchFormText;
    this.isSearchList = true;
  }

  ngOnInit(){
    this.setTheme('');
  }

  setTheme(e){
    if(e){
      this.isDarkTheme = e.checked;
    }
    if(this.isDarkTheme){
      this.body.classList.remove('light-body');
      this.body.classList.add('dark-body');
    } else {
      this.body.classList.remove('dark-body');
      this.body.classList.add('light-body');
    }
  }

  loadSeasons(e){
    this.showDetails = false;
    this.moviedataSevice.imdb = e;
    this.router.navigateByUrl('/seasons');
  }
}
