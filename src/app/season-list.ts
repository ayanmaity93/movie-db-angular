export interface SeasonCache {
    SeasonNo:number,
    SeasonObject?:SeasonList,
    Spinner:boolean
}

export interface SeasonList {
    Title?:string,
    Season?:string,
    totalSeasons?:string,
    Episodes?:Array<EpisodeItem>,
    Response:string,
    Error?:string
}

interface EpisodeItem {
    Title:string,
    Released:string,
    Episode:string,
    imdbRating:string,
    imdbID:string
}