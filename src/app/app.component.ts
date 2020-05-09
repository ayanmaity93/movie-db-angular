import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Movie Database';
  searchTitle:String;

  getDetails(e){
    this.searchTitle=e;
  }
}
