import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegExCustomValidator } from '../validators';
import { MovieList, MovieItem } from '../movie-list';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MoviedataService } from '../moviedata.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  filmTitle:string;
  isAdvSearch:boolean = false;
  autoSuggestion$: Observable<MovieItem[]>;
  keyword = new Subject<string>();
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
  constructor(public fb:FormBuilder, private mds:MoviedataService) { }

  searchTitle = this.fb.group({
    type: [''],
    title: ['',[Validators.required,Validators.minLength(2)]],
    year: ['',[RegExCustomValidator(/^[0-9]*$/), Validators.max(3000)]]
  })

  ngOnInit(): void {
    this.searchTitle.get('type').setValue(this.searchType[0].key);
    this.autoSuggestion$ = this.keyword.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap((key)=>this.mds.getListForSuggestion(key))
    );
  }
  search(values){
    this.titleSubmit.emit(values);
  }

  advSearch(){
    this.isAdvSearch = !this.isAdvSearch;
  }

  autoSuggest(isValid,key){
    if(isValid){
      this.keyword.next(key.trim());
    }
  }

}
