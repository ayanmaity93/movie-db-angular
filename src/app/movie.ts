export interface Movie {
    Title?:string,
    Year?:Number,
    Rated?:string,
    Released?:string,
    Runtime?:string,
    Genre?:string,
    GenreArr?:Array<string>,
    Director?:string,
    Writer?:string,
    WriterArr?:Array<string>,
    Actors?:string,
    ActorsArr?:Array<string>,
    Plot?:string,
    Language?:string,
    Country?:string,
    Awards?:string,
    Poster?:string,
    Ratings?:Array<Rating>,
    Type?:string,
    Response:string,
    Error?:string
}

interface Rating {
    Source:string,
    Value:string
}
