import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  baseUrl:string = "https://www.omdbapi.com/";
  apiKey:string = "cb88f6e1";

  constructor() { }

  queryGenerator(title:string,searchType:string,type?:string,year?:string,pageNo?:string):string {
    let query:string= this.baseUrl + "?apikey=" + this.apiKey+"&plot=full";
    if(searchType=='title'){
      query = query+"&t="+title.replace(' ','+');
    } else if(searchType=='imdb') {
      query = query+"&i="+title.replace(' ','+');
    } else {
      query = query+"&s="+title.replace(' ','+');
    }
    if(type){
      query = query+"&type="+type;
    }
    if(year){
      query = query+"&y="+year;
    }
    if(pageNo){
      query = query+"&page="+pageNo;
    }
    return query;
  }
}
