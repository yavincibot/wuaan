import { MovieDocument } from "../../databases/interfaces/movie.js";
export interface MovieDetails {
    messageIds?: number[];
    movieName?: string;
    moviePosterID?: string;
    year?: string;
    language?: string[];
    genres?: string[];
    quality?: string;
    synopsis?: string;
    rating?: string;
    channel?: string;
    subtitle?: string;
}
export default function getMoviedata(movieDetails: MovieDetails, messageIds: number[]): MovieDocument;
