import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MOVIE DB';
  searchTitle:string;
  searchFormText:string;
  searchType:string = "form";
  isSearchList:boolean = false;

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
}
