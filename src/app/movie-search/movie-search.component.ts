import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  filmTitle:string;
  isAdvSearch:boolean = false;
  searchType = [{
    "value":"All",
    "key":""
  }, {
    "value":"Film",
    "key":"movie"
  }, {
    "value":"TV",
    "key":"series"
  }]
  @Output() titleSubmit = new EventEmitter();
  constructor(public fb:FormBuilder) { }

  searchTitle = this.fb.group({
    type: [''],
    title: ['',Validators.required],
    year: ['',Validators.max(3000)]
  })

  ngOnInit(): void {
    this.searchTitle.get('type').setValue(this.searchType[0].key);
  }
  search(values){
    this.titleSubmit.emit(values);
  }

  advSearch(){
    this.isAdvSearch = !this.isAdvSearch;
  }

}
