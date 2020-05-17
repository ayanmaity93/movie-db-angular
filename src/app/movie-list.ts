export interface MovieList {
    Search?:Array<MovieItem>,
    totalResults?:string,
    Response:string,
    Error?:string
}

export interface MovieItem {
    Title:string,
    Year:string,
    imdbID:string,
    Type:string,
    Poster:string
}