import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Movie } from './movie'

@Injectable({
  providedIn: 'root'
})
export class MoviedataService {

  constructor(private http:HttpClient) { }

  getData (title): Observable<Movie> {
    let searchTitle = title.replace(' ','+');
    return this.http.get<Movie>(`https://www.omdbapi.com/?t=${searchTitle}&apikey=cb88f6e1&plot=full`);
  }

  transformData(data:String):Array<String>{
    return data?.split(',');
  }
}
