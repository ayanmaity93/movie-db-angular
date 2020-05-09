import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MOVIE DB';
  searchTitle:String;

  getDetails(e){
    this.searchTitle=e;
  }
}
