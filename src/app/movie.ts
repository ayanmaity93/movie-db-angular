export interface Movie {
    Title?:String,
    Year?:Number,
    Rated?:String,
    Released?:String,
    Runtime?:String,
    Genre?:String,
    GenreArr?:Array<String>,
    Director?:String,
    Writer?:String,
    WriterArr?:Array<String>,
    Actors?:String,
    ActorsArr?:Array<String>,
    Plot?:String,
    Language?:String,
    Country?:String,
    Awards?:String,
    Poster?:String,
    Ratings?:Array<Rating>,
    Type?:String,
    Response:String,
    Error?:String
}

interface Rating {
    Source:String,
    Value:String
}
