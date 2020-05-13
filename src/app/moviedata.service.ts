import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { AppConfigService } from './app-config.service';
import { MovieList } from './movie-list';

@Injectable({
  providedIn: 'root'
})
export class MoviedataService {

  constructor(private http:HttpClient, @Optional() private appConfig:AppConfigService) { }

  getData (title,key): Observable<Movie> {
    return this.http.get<Movie>(this.appConfig.queryGenerator(title,key));
  }

  getList (title,type?,year?,pageNo?): Observable<MovieList> {
    return this.http.get<MovieList>(this.appConfig.queryGenerator(title,'list',type,year,pageNo));
  }

  transformData(data:string):Array<string>{
    return data?.split(',');
  }
}
