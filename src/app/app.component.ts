import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MOVIE DB';
  searchTitle:string;
  searchFormText:string;
  searchType:string = "form";
  isSearchList:boolean = false;
  isDarkTheme:boolean = false;

  body:HTMLElement = document.getElementById("main-body");

  getDetails(e,type){
    if(type==='imdb'){
      this.searchFormText = this.searchTitle;
    } else {
      this.searchFormText = e;
    }
    this.searchTitle=e;
    this.searchType=type;
    this.isSearchList = false;
  }

  searchForList(){
    this.searchTitle = this.searchFormText;
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
}
